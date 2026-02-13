export function isBlank(value: unknown): boolean {
  return String(value ?? '').trim().length === 0;
}

export function safeTrim(value: unknown): string {
  return String(value ?? '').trim();
}
