export type RepurchaseProduct = {
  id: string; sku: string; name: string; barcode: string | null; brand: string | null;
  category: string | null; unitOfMeasure: string | null; active: boolean;
  buyingPrice: number | null; sellingPrice: number | null; availableQuantity: number;
};

export type RepurchaseLine = {
  productId: string; sku: string; productName: string; quantity: number;
  buyingPrice: number; sellingPrice: number;
  batchNumber?: string | null; expiryDate?: string | null; location?: string | null;
};

export type RepurchaseOrder = {
  id: string; supplier: string | null; invoiceNumber: string | null; createdAt: string;
  createdBy: string | null; activation: boolean; receivedPurchaseId: string | null;
  lines: RepurchaseLine[];
};

export type ReceiptLine = RepurchaseLine & { batchNumber: string; expiryDate: string };

export const orderFields = 'id supplier invoiceNumber createdAt createdBy activation receivedPurchaseId lines { productId sku productName quantity buyingPrice sellingPrice batchNumber expiryDate location }';
