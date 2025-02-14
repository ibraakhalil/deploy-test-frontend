export const RTL_LOCALES = ["ar"];

export function getLocaleDirection(locale: string) {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}
