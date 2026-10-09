import {
  ApplicationRef,
  DestroyRef,
  FactoryTarget,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  RuntimeError,
  Subject,
  __decorate,
  assertInInjectionContext,
  computed,
  core_exports,
  filter,
  formatRuntimeError,
  init_core,
  init_esm,
  init_operators,
  init_root_effect_scheduler,
  init_tslib_es6,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  signal,
  switchMap,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({ action: "INITIALIZE" });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const { registrationStrategy } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory(opts, injector) {
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([
    SwPush,
    SwUpdate,
    { provide: SCRIPT, useValue: script },
    { provide: SwRegistrationOptions, useValue: options },
    {
      provide: NgswCommChannel,
      useFactory: ngswCommChannelFactory,
      deps: [SwRegistrationOptions, Injector]
    },
    provideAppInitializer(ngswAppInitializer)
  ]);
}
var ERR_SW_NOT_SUPPORTED, NgswCommChannel, SwPush, SwUpdate, SCRIPT, SwRegistrationOptions, ServiceWorkerModule;
var init_service_worker = __esm({
  "node_modules/@angular/service-worker/fesm2022/service-worker.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
    NgswCommChannel = class {
      serviceWorker;
      worker;
      registration;
      events;
      constructor(serviceWorker, injector) {
        this.serviceWorker = serviceWorker;
        if (!serviceWorker) {
          this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
        } else {
          let currentWorker = null;
          const workerSubject = new Subject();
          this.worker = new Observable((subscriber) => {
            if (currentWorker !== null) {
              subscriber.next(currentWorker);
            }
            return workerSubject.subscribe((v) => subscriber.next(v));
          });
          const updateController = () => {
            const { controller } = serviceWorker;
            if (controller === null) {
              return;
            }
            currentWorker = controller;
            workerSubject.next(currentWorker);
          };
          serviceWorker.addEventListener("controllerchange", updateController);
          updateController();
          this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
            if (!registration) {
              throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
            }
            return registration;
          })));
          const _events = new Subject();
          this.events = _events.asObservable();
          const messageListener = (event) => {
            const { data } = event;
            if (data?.type) {
              _events.next(data);
            }
          };
          serviceWorker.addEventListener("message", messageListener);
          const appRef = injector?.get(ApplicationRef, null, { optional: true });
          appRef?.onDestroy(() => {
            serviceWorker.removeEventListener("controllerchange", updateController);
            serviceWorker.removeEventListener("message", messageListener);
          });
        }
      }
      postMessage(action, payload) {
        return new Promise((resolve) => {
          this.worker.pipe(take(1)).subscribe((sw) => {
            sw.postMessage(__spreadValues({
              action
            }, payload));
            resolve();
          });
        });
      }
      postMessageWithOperation(type, payload, operationNonce) {
        const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
        const postMessage = this.postMessage(type, payload);
        return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
      }
      generateNonce() {
        return Math.round(Math.random() * 1e7);
      }
      eventsOfType(type) {
        let filterFn;
        if (typeof type === "string") {
          filterFn = (event) => event.type === type;
        } else {
          filterFn = (event) => type.includes(event.type);
        }
        return this.events.pipe(filter(filterFn));
      }
      nextEventOfType(type) {
        return this.eventsOfType(type).pipe(take(1));
      }
      waitForOperationCompleted(nonce) {
        return new Promise((resolve, reject) => {
          this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
            if (event.result !== void 0) {
              return event.result;
            }
            throw new Error(event.error);
          })).subscribe({
            next: resolve,
            error: reject
          });
        });
      }
      get isEnabled() {
        return !!this.serviceWorker;
      }
    };
    SwPush = class _SwPush {
      sw;
      /**
       * Emits the payloads of the received push notification messages.
       */
      messages;
      /**
       * Emits the payloads of the received push notification messages as well as the action the user
       * interacted with. If no action was used the `action` property contains an empty string `''`.
       *
       * Note that the `notification` property does **not** contain a
       * [Notification][Mozilla Notification] object but rather a
       * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
       * object that also includes the `title` of the [Notification][Mozilla Notification] object.
       *
       * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
       *
       * @see [Notification click handling](ecosystem/service-workers/push-notifications#notification-click-handling)
       *
       */
      notificationClicks;
      /**
       * Emits the payloads of notifications that were closed, along with the action (if any)
       * associated with the close event. If no action was used, the `action` property contains
       * an empty string `''`.
       *
       * Note that the `notification` property does **not** contain a
       * [Notification][Mozilla Notification] object but rather a
       * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
       * object that also includes the `title` of the [Notification][Mozilla Notification] object.
       *
       * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
       */
      notificationCloses;
      /**
       * Emits updates to the push subscription, including both the previous (`oldSubscription`)
       * and current (`newSubscription`) values. Either subscription may be `null`, depending on
       * the context:
       *
       * - `oldSubscription` is `null` if no previous subscription existed.
       * - `newSubscription` is `null` if the subscription was invalidated and not replaced.
       *
       * This stream allows clients to react to automatic changes in push subscriptions,
       * such as those triggered by browser expiration or key rotation.
       *
       * [Push API]: https://w3c.github.io/push-api
       */
      pushSubscriptionChanges;
      /**
       * Emits the currently active
       * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
       * associated to the Service Worker registration or `null` if there is no subscription.
       */
      subscription;
      /**
       * True if the Service Worker is enabled (supported by the browser and enabled via
       * `ServiceWorkerModule`).
       */
      get isEnabled() {
        return this.sw.isEnabled;
      }
      pushManager = null;
      subscriptionChanges = new Subject();
      constructor(sw) {
        this.sw = sw;
        if (!sw.isEnabled) {
          this.messages = NEVER;
          this.notificationClicks = NEVER;
          this.notificationCloses = NEVER;
          this.pushSubscriptionChanges = NEVER;
          this.subscription = NEVER;
          return;
        }
        this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
        this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
        this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
        this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
        this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
        const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
        this.subscription = new Observable((subscriber) => {
          const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
          const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
          return () => {
            workerDrivenSubscription.unsubscribe();
            subscriptionChanges.unsubscribe();
          };
        });
      }
      /**
       * Subscribes to Web Push Notifications,
       * after requesting and receiving user permission.
       *
       * @param options An object containing the `serverPublicKey` string.
       * @returns A Promise that resolves to the new subscription object.
       */
      requestSubscription(options) {
        if (!this.sw.isEnabled || this.pushManager === null) {
          return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
        }
        const pushOptions = { userVisibleOnly: true };
        let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
        let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
        for (let i = 0; i < key.length; i++) {
          applicationServerKey[i] = key.charCodeAt(i);
        }
        pushOptions.applicationServerKey = applicationServerKey;
        return new Promise((resolve, reject) => {
          this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
            next: (sub) => {
              this.subscriptionChanges.next(sub);
              resolve(sub);
            },
            error: reject
          });
        });
      }
      /**
       * Unsubscribes from Service Worker push notifications.
       *
       * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
       *          active subscription or the unsubscribe operation fails.
       */
      unsubscribe() {
        if (!this.sw.isEnabled) {
          return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
        }
        const doUnsubscribe = (sub) => {
          if (sub === null) {
            throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
          }
          return sub.unsubscribe().then((success) => {
            if (!success) {
              throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
            }
            this.subscriptionChanges.next(null);
          });
        };
        return new Promise((resolve, reject) => {
          this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({ next: resolve, error: reject });
        });
      }
      decodeBase64(input) {
        return atob(input);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _SwPush, deps: [{ token: NgswCommChannel }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _SwPush });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: SwPush, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: NgswCommChannel }] });
    SwUpdate = class _SwUpdate {
      sw;
      /**
       * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
       *
       * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
       * version fails.
       *
       * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
       * activation.
       *
       * @see [Version updates](ecosystem/service-workers/communications#version-updates)
       *
       */
      versionUpdates;
      /**
       * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
       * worker to serve this client is in a broken state that cannot be recovered from without a full
       * page reload.
       */
      unrecoverable;
      /**
       * True if the Service Worker is enabled (supported by the browser and enabled via
       * `ServiceWorkerModule`).
       */
      get isEnabled() {
        return this.sw.isEnabled;
      }
      ongoingCheckForUpdate = null;
      constructor(sw) {
        this.sw = sw;
        if (!sw.isEnabled) {
          this.versionUpdates = NEVER;
          this.unrecoverable = NEVER;
          return;
        }
        this.versionUpdates = this.sw.eventsOfType([
          "VERSION_DETECTED",
          "VERSION_INSTALLATION_FAILED",
          "VERSION_READY",
          "NO_NEW_VERSION_DETECTED"
        ]);
        this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
      }
      /**
       * Checks for an update and waits until the new version is downloaded from the server and ready
       * for activation.
       *
       * @returns a promise that
       * - resolves to `true` if a new version was found and is ready to be activated.
       * - resolves to `false` if no new version was found
       * - rejects if any error occurs
       */
      checkForUpdate() {
        if (!this.sw.isEnabled) {
          return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
        }
        if (this.ongoingCheckForUpdate) {
          return this.ongoingCheckForUpdate;
        }
        const nonce = this.sw.generateNonce();
        this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", { nonce }, nonce).finally(() => {
          this.ongoingCheckForUpdate = null;
        });
        return this.ongoingCheckForUpdate;
      }
      /**
       * Updates the current client (i.e. browser tab) to the latest version that is ready for
       * activation.
       *
       * In most cases, you should not use this method and instead should update a client by reloading
       * the page.
       *
       * <div class="docs-alert docs-alert-important">
       *
       * Updating a client without reloading can easily result in a broken application due to a version
       * mismatch between the application shell and other page resources,
       * such as lazy-loaded chunks, whose filenames may change between
       * versions.
       *
       * Only use this method, if you are certain it is safe for your specific use case.
       *
       * </div>
       *
       * @returns a promise that
       *  - resolves to `true` if an update was activated successfully
       *  - resolves to `false` if no update was available (for example, the client was already on the
       *    latest version).
       *  - rejects if any error occurs
       */
      activateUpdate() {
        if (!this.sw.isEnabled) {
          return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
        }
        const nonce = this.sw.generateNonce();
        return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", { nonce }, nonce);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _SwUpdate, deps: [{ token: NgswCommChannel }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _SwUpdate });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: SwUpdate, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: NgswCommChannel }] });
    SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
    SwRegistrationOptions = class {
      /**
       * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
       * `SwUpdate`) will attempt to communicate and interact with it.
       *
       * Default: true
       */
      enabled;
      /**
       * The value of the setting used to determine the circumstances in which the browser
       * will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via importScripts().
       * [ServiceWorkerRegistration.updateViaCache](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
       */
      updateViaCache;
      /**
       * The type of the ServiceWorker script to register.
       * [ServiceWorkerRegistration#type](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#type)
       * - `classic`: Registers the script as a classic worker. ES module features such as `import` and `export` are NOT allowed in the script.
       * - `module`: Registers the script as an ES module. Allows use of `import`/`export` syntax and module features.
       *
       * @default 'classic'
       */
      type;
      /**
       * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
       * control. It will be used when calling
       * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
       */
      scope;
      /**
       * Defines the ServiceWorker registration strategy, which determines when it will be registered
       * with the browser.
       *
       * The default behavior of registering once the application stabilizes (i.e. as soon as there are
       * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
       * possible but without affecting the application's first time load.
       *
       * Still, there might be cases where you want more control over when the ServiceWorker is
       * registered (for example, there might be a long-running timeout or polling interval, preventing
       * the app from stabilizing). The available option are:
       *
       * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
       *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
       *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
       *     task), the ServiceWorker will be registered anyway.
       *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
       *     stabilizes.
       * - `registerImmediately`: Register immediately.
       * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
       *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
       *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
       *     as possible but still asynchronously, once all pending micro-tasks are completed.
       * - An Observable factory function: A function that returns an `Observable`.
       *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
       *     ServiceWorker will be registered as soon as the first value is emitted.
       *
       * Default: 'registerWhenStable:30000'
       */
      registrationStrategy;
    };
    ServiceWorkerModule = class _ServiceWorkerModule {
      /**
       * Register the given Angular Service Worker script.
       *
       * If `enabled` is set to `false` in the given options, the module will behave as if service
       * workers are not supported by the browser, and the service worker will not be registered.
       */
      static register(script, options = {}) {
        return {
          ngModule: _ServiceWorkerModule,
          providers: [provideServiceWorker(script, options)]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _ServiceWorkerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: core_exports, type: _ServiceWorkerModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _ServiceWorkerModule, providers: [SwPush, SwUpdate] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: ServiceWorkerModule, decorators: [{
      type: NgModule,
      args: [{ providers: [SwPush, SwUpdate] }]
    }] });
  }
});

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
var init_rxjs_interop = __esm({
  "node_modules/@angular/core/fesm2022/rxjs-interop.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_root_effect_scheduler();
  }
});

// src/app/core/pwa.service.ts
var PwaService;
var init_pwa_service = __esm({
  "src/app/core/pwa.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_rxjs_interop();
    init_service_worker();
    PwaService = class PwaService2 {
      updates = inject(SwUpdate);
      destroyRef = inject(DestroyRef);
      promptEvent = signal(null);
      online = signal(typeof navigator === "undefined" || navigator.onLine);
      updateAvailable = signal(false);
      installing = signal(false);
      installError = signal(null);
      canInstall = computed(() => this.promptEvent() !== null && !this.installing());
      constructor() {
        if (typeof window !== "undefined") {
          const online = () => this.online.set(true);
          const offline = () => this.online.set(false);
          const beforeInstall = (event) => {
            event.preventDefault();
            this.promptEvent.set(event);
            this.installError.set(null);
          };
          const installed = () => this.promptEvent.set(null);
          window.addEventListener("online", online);
          window.addEventListener("offline", offline);
          window.addEventListener("beforeinstallprompt", beforeInstall);
          window.addEventListener("appinstalled", installed);
          this.destroyRef.onDestroy(() => {
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);
            window.removeEventListener("beforeinstallprompt", beforeInstall);
            window.removeEventListener("appinstalled", installed);
          });
        }
        if (this.updates.isEnabled) {
          this.updates.versionUpdates.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
            if (event.type === "VERSION_READY")
              this.updateAvailable.set(true);
          });
        }
      }
      install() {
        return __async(this, null, function* () {
          const event = this.promptEvent();
          if (!event || this.installing())
            return;
          this.installing.set(true);
          this.installError.set(null);
          try {
            yield event.prompt();
            yield event.userChoice;
          } catch {
            this.installError.set("Use your browser menu to install or add this app to your home screen.");
          } finally {
            this.promptEvent.set(null);
            this.installing.set(false);
          }
        });
      }
      reload() {
        window.location.reload();
      }
      static ctorParameters = () => [];
    };
    PwaService = __decorate([
      Injectable({ providedIn: "root" })
    ], PwaService);
  }
});

export {
  takeUntilDestroyed,
  init_rxjs_interop,
  SwUpdate,
  init_service_worker,
  PwaService,
  init_pwa_service
};
/*! Bundled license information:

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DREZCIG3.js.map
