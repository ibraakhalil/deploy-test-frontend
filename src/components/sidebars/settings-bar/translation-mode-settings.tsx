import { Accordion } from "shadcn/components/ui/accordion";
import { useSettings } from "@/stores/use-settings";
import { SettingAccordion } from "@/components/common/accordion";
import { ReadingSettings } from "@/components/sidebars/settings-bar/reading-settings";
import { ArabicFontSlider, TranslationFontSlider } from "@/components/sidebars/settings-bar/font-size-slider";
import { OptionLabel, OptionTrigger } from "@/components/sidebars/settings-bar/option-trigger";
import { MonthlyDonorCard } from "@/components/banners/monthly-donor-card";

export function TranslationModeSettings() {
  const { setActiveState } = useSettings();

  return (
    <Accordion type="single" defaultValue="Font Settings" collapsible className="h-full overflow-y-auto">
      <div>
        <ReadingSettings />
        <SettingAccordion title="Font Settings" className="space-y-4 pe-[--gap-end] ps-[--gap-start]">
          <OptionLabel label="Arabic Font Face">
            <OptionTrigger onClick={() => setActiveState("fonts")}>KFGQ</OptionTrigger>
          </OptionLabel>
          <ArabicFontSlider />
          <TranslationFontSlider />
        </SettingAccordion>
      </div>
      <div className="mt-4 pe-[--gap-end] ps-[--gap-start]">
        <MonthlyDonorCard />
      </div>
    </Accordion>
  );
}
