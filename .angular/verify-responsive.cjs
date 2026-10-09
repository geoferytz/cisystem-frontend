const assert = require('node:assert/strict');
const { writeFileSync } = require('node:fs');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const targets = await (await fetch('http://localhost:9333/json/list')).json();
  const target = targets.find(t => t.type === 'page');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(resolve => ws.addEventListener('open', resolve, { once: true }));
  let id = 0;
  const pending = new Map();
  const errors = [];
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const current = ++id;
    const timer = setTimeout(() => { pending.delete(current); reject(new Error('Timeout: ' + method)); }, 45000);
    pending.set(current, { resolve, reject, timer });
    ws.send(JSON.stringify({ id: current, method, params }));
  });
  ws.addEventListener('message', async event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const entry = pending.get(message.id);
      if (!entry) return;
      clearTimeout(entry.timer);
      pending.delete(message.id);
      message.error ? entry.reject(new Error(message.error.message)) : entry.resolve(message.result);
    }
    if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
    if (message.method === 'Fetch.requestPaused') {
      const data = {
        me: { id: 'test-admin', name: 'Preview Admin', email: 'preview@example.test', roles: ['ADMIN'] },
        myPermissions: [], expiryAlerts: [], lowStockAlerts: [],
        categories: [{ id: 'c1', name: 'Skincare', active: true }],
        products: [
          { id: 'p1', sku: 'TEST-001', barcode: '123456', name: 'Sample moisturizer', brand: 'Demo', category: 'Skincare', variant: '50ml', unitOfMeasure: 'Each', buyingPrice: 10, sellingPrice: 15, active: true, batches: [{ id: 'b1', batchNumber: 'B-001', createdAt: '2026-01-01' }] },
          { id: 'p2', sku: 'TEST-002', barcode: '234567', name: 'Sample cleanser', brand: 'Demo', category: 'Skincare', variant: '100ml', unitOfMeasure: 'Each', buyingPrice: 8, sellingPrice: 12, active: true, batches: [] }
        ]
      };
      await send('Fetch.fulfillRequest', {
        requestId: message.params.requestId, responseCode: 200,
        responseHeaders: [
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Access-Control-Allow-Origin', value: 'http://localhost:4202' },
          { name: 'Access-Control-Allow-Headers', value: 'authorization, content-type' },
          { name: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' }
        ],
        body: Buffer.from(JSON.stringify({ data })).toString('base64')
      });
    }
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };
  const waitFor = async expression => {
    for (let attempt = 0; attempt < 80; attempt++) {
      if (await evaluate(expression)) return;
      await sleep(250);
    }
    throw new Error('Condition not reached: ' + expression);
  };
  const viewport = async width => {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 812, deviceScaleFactor: 1, mobile: width < 768 });
    await sleep(300);
  };
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await send('Network.setBypassServiceWorker', { bypass: true });
  await send('Fetch.enable', { patterns: [{ urlPattern: '*graphql*' }] });
  await send('Page.addScriptToEvaluateOnNewDocument', { source: "localStorage.setItem('cisystem.accessToken','responsive-test-only'); history.replaceState(null,'','/products');" });
  await viewport(375);
  await send('Page.navigate', { url: 'http://localhost:4202/index.html' });
  await waitFor("document.querySelectorAll('.cis-responsive-table > tbody > tr').length >= 2");
  for (const width of [320, 375, 767, 768, 1280]) {
    await viewport(width);
    const state = await evaluate(`(() => {
      const table = document.querySelector('.cis-responsive-table');
      const nav = document.querySelector('.cis-bottom-nav');
      return { width: innerWidth, scroll: document.documentElement.scrollWidth, row: getComputedStyle(table.tBodies[0].rows[0]).display, nav: getComputedStyle(nav).display, labels: table.tBodies[0].rows[0].cells[0].dataset.label };
    })()`);
    console.log('Viewport', width, state);
    assert.equal(state.width, width);
    assert.ok(state.scroll <= width, 'Horizontal overflow at ' + width);
    assert.equal(state.row, width < 768 ? 'block' : 'table-row');
    assert.equal(state.nav, width < 768 ? 'flex' : 'none');
    assert.ok(state.labels);
  }
  await viewport(375);
  const cardsScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync('E:/CISYSTEM/frontend/.angular/mobile-cards-check.png', Buffer.from(cardsScreenshot.data, 'base64'));
  await evaluate("document.querySelector('app-shell-header button[aria-controls]').click()");
  await sleep(350);
  assert.equal(await evaluate("document.querySelector('aside.cis-sidebar').contains(document.activeElement)"), true, 'Drawer focus capture');
  assert.equal(await evaluate("getComputedStyle(document.body).overflow"), 'hidden');
  await evaluate("document.querySelector('aside [role=button]').click()");
  await sleep(150);
  assert.equal(await evaluate("getComputedStyle(document.querySelector('.cis-sidebar-flyout')).position"), 'static');
  await evaluate("document.querySelector('button[aria-label=\"Close navigation\"]').click()");
  await sleep(300);
  assert.equal(await evaluate("document.querySelector('aside.cis-sidebar').hasAttribute('inert')"), true);
  console.log('Drawer focus, inline submenu, and close: PASS');
  await evaluate("Array.from(document.querySelectorAll('.cis-system button')).find(b => /Add\\s+Product|Ongeza\\s+Bidhaa/.test(b.textContent)).click()");
  await waitFor("!!document.querySelector('.cis-modal-overlay')");
  const modal = await evaluate(`(() => {
    const panel = document.querySelector('.cis-modal-overlay > .flex > div');
    const rect = panel.getBoundingClientRect();
    return { width: rect.width, height: rect.height, columns: getComputedStyle(panel.querySelector('form > .grid')).gridTemplateColumns, inputFont: getComputedStyle(panel.querySelector('input')).fontSize, actions: getComputedStyle(panel.querySelector('form .justify-end')).flexDirection };
  })()`);
  console.log('Mobile modal', modal);
  assert.equal(modal.width, 375);
  assert.equal(modal.height, 812);
  assert.equal(modal.columns.trim().split(/\s+/).length, 1);
  assert.equal(modal.inputFont, '16px');
  assert.equal(modal.actions, 'column');
  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync('E:/CISYSTEM/frontend/.angular/mobile-modal-check.png', Buffer.from(screenshot.data, 'base64'));
  await evaluate("document.querySelector('.cis-modal-overlay button').click()");
  await send('Network.setBypassServiceWorker', { bypass: false });
  await evaluate("navigator.serviceWorker.ready.then(() => true)");
  await send('Page.reload');
  await waitFor('!!navigator.serviceWorker.controller');
  const manifest = await send('Page.getAppManifest');
  assert.deepEqual(manifest.errors, []);
  const installability = await send('Page.getInstallabilityErrors');
  console.log('Installability', installability);
  assert.deepEqual(installability.installabilityErrors, []);
  const cacheUrls = await evaluate("caches.keys().then(async names => (await Promise.all(names.map(async name => (await (await caches.open(name)).keys()).map(r => r.url)))).flat())");
  assert.equal(cacheUrls.some(url => url.includes('/graphql') || url.includes('/api/')), false);
  console.log('Service worker ready; no API response caching: PASS');
  await send('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 });
  await waitFor("document.body.textContent.includes('You are offline')");
  assert.equal(await evaluate("navigator.onLine"), false);
  console.log('Offline connectivity notice: PASS');
  await send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  assert.deepEqual(errors, []);
  ws.close();
})().catch(error => { console.error(error); process.exit(1); });
