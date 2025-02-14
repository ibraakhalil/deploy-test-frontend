import { SettingAccordion } from "@/components/common/accordion";
import { Switch } from "@/components/common/switch-button";
import { OptionLabel, OptionTrigger } from "@/components/sidebars/settings-bar/option-trigger";
import { BookOpenIcon } from "@/components/svg";
import useLayoutPath from "@/hooks/use-layout-path";
import { useSettings } from "@/stores/use-settings";

export function ReadingSettings() {
  const path = useLayoutPath();
  const { isWBW, setIsWBW, setActiveState } = useSettings();
  const isTafsirPage = path === "/surahId/tafsirs";

  return (
    <SettingAccordion
      title="Reading Settings"
      className="space-y-4 pe-[--gap-end] ps-[--gap-start]"
      icon={BookOpenIcon}
    >
      <OptionLabel label="Translation font Face">
        <OptionTrigger onClick={() => setActiveState("translators")}>Translation</OptionTrigger>
      </OptionLabel>
      {isTafsirPage && (
        <OptionLabel label="Select Tafsir">
          <OptionTrigger onClick={() => setActiveState("tafsirs")}>Tafsir</OptionTrigger>
        </OptionLabel>
      )}
      <OptionLabel label="WBW Translation" className="flex items-center justify-between">
        <Switch isActive={isWBW} id="wbw" onChange={() => setIsWBW(!isWBW)} />
      </OptionLabel>
      <OptionLabel label="Tajweed" className="flex items-center justify-between">
        <Switch id="tajweed" />
      </OptionLabel>
    </SettingAccordion>
  );
}
