export function toIsoDate(value: Date): string {
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function startOfMonth(year: number, month1to12: number): string {
  const mm = String(month1to12).padStart(2, '0');
  return `${year}-${mm}-01`;
}

export function endOfMonth(year: number, month1to12: number): string {
  const d = new Date(year, month1to12, 0);
  return toIsoDate(d);
}
