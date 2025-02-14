"use client";

import { useSettings } from "@/stores/use-settings";
import { Slider } from "shadcn/components/ui/slider";

export function ArabicFontSlider() {
  const { arabicFontSize, setArabicFontSize } = useSettings();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-title font-medium">Arabic Font Size</h3>
        <p className="text-subtitle font-medium text-primary">{arabicFontSize}</p>
      </div>
      <Slider min={18} max={56} onValueChange={value => setArabicFontSize(value[0])} defaultValue={[arabicFontSize]} />
    </div>
  );
}

export function TranslationFontSlider() {
  const { translationFontSize, setTranslationFontSize } = useSettings();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-title font-medium">Translation Font Size</h3>
        <p className="text-subtitle font-medium text-primary">{translationFontSize}</p>
      </div>
      <Slider
        min={14}
        max={44}
        onValueChange={value => setTranslationFontSize(value[0])}
        defaultValue={[translationFontSize]}
      />
    </div>
  );
}
