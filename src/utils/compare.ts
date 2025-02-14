// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanString(input: any): string {
  return String(input).replace(/\s+/g, " ").trim().toLowerCase();
}

export function softCompare(input: unknown, query: unknown): boolean {
  return String(input).toLowerCase().includes(String(query).toLowerCase());
}
