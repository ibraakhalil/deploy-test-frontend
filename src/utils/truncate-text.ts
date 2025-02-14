export function truncateText(text: string, maxLength: number, prefix: string = "..."): string {
  return text.length > maxLength ? `${text.slice(0, maxLength) + prefix} ` : text;
}
