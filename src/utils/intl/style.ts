import { Locale } from "@/config/i18n.config";
import { fontsConfig } from "@/utils/intl/fonts";

export function getFontByLocale(locale: Locale) {
  return fontsConfig[locale] ?? fontsConfig.en;
}

export function getFontStyle(locale: Locale) {
  return fontsConfig[locale].style ?? fontsConfig.en.style;
}

export function getClassNameByLocal(locale: Locale) {
  return getFontByLocale(locale).className;
}

export function getFontFamily(locale: Locale) {
  return getFontByLocale(locale)
    .fonts.map(font => font.name)
    .join(", ");
}
