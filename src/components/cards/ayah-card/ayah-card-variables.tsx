"use client";

import { useSettings } from "@/stores/use-settings";
import { CSSProperties } from "react";

export function AyahCardVariables({ children }: { children: React.ReactNode }) {
  const { arabicFontFace, translationFontFace, arabicFontSize, translationFontSize } = useSettings();

  const style: CSSProperties = {
    "--arabic-font-face": arabicFontFace,
    "--arabic-font-size": `${arabicFontSize}px`,
    "--arabic-line-height": `${arabicFontSize * 2.52}px`,
    "--translation-font-face": translationFontFace,
    "--translation-font-size": `${translationFontSize}px`,
  } as CSSProperties;

  return <div style={style}>{children}</div>;
}
