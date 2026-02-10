export type MySalesLine = {
  productName: string;
  quantity: number;
  unitPrice: number;
};

export type MySale = {
  id: string;
  createdAt: string;
  customer?: string | null;
  referenceNumber?: string | null;
  lines: MySalesLine[];
};

const STORAGE_KEY = 'cis.mySales.v1';

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function loadMySales(): MySale[] {
  const data = safeJsonParse<MySale[]>(localStorage.getItem(STORAGE_KEY), []);
  return Array.isArray(data) ? data : [];
}

export function saveMySales(sales: MySale[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sales));
}

export function addMySale(sale: Omit<MySale, 'id' | 'createdAt'>): MySale {
  const now = new Date();
  const entry: MySale = {
    id: crypto.randomUUID(),
    createdAt: now.toISOString(),
    customer: sale.customer ?? null,
    referenceNumber: sale.referenceNumber ?? null,
    lines: sale.lines
  };

  const all = loadMySales();
  saveMySales([entry, ...all]);
  return entry;
}

export function deleteMySale(id: string): void {
  const all = loadMySales();
  saveMySales(all.filter((s) => s.id !== id));
}

export function saleTotal(sale: MySale): number {
  return (sale.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
}
