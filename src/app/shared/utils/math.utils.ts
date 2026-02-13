export function sumBy<T>(items: T[], pick: (item: T) => number): number {
  return items.reduce((s, x) => s + Number(pick(x) ?? 0), 0);
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
