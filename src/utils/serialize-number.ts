export function serializeNumber(n: number | string): string {
  const toNumber = typeof n === "string" ? parseInt(n, 10) : n;
  if (toNumber < 10) {
    return `0${toNumber}`;
  }
  return toNumber.toString();
}
