import { Locale } from "@/config/i18n.config";

export type Font = { name: string; path: string; type: string; weight?: `${number}` };

export type FontConfig = {
  className: string;
  style?: Partial<CSSStyleDeclaration>;
  variable?: string[];
  fonts: Font[];
};

export const fontsConfig = {
  en: {
    fonts: [],
    className: "font-inter text-base",
  },

  bn: {
    fonts: [
      { path: "noto-serif.ttf", type: "truetype", name: "noto-serif" },
      { path: "hind-siliguri.ttf", type: "truetype", name: "hind-siliguri" },
    ],

    className: "text-base font-noto-serif",
  },

  ar: {
    fonts: [],
    className: "text-base",
  },
} as Record<Locale, FontConfig>;
