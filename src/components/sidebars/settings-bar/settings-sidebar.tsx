import { Tab } from "@/components/common/tab";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useSettings } from "@/stores/use-settings";
import { ReadingModeSettings } from "@/components/sidebars/settings-bar/reading-mode-settings";
import { Tafsirs } from "@/components/sidebars/settings-bar/tafsirs";
import { Translators } from "@/components/sidebars/settings-bar/translators";
import { ArabicFontFaces } from "@/components/sidebars/settings-bar/arabic-font-faces";
import { TranslationModeSettings } from "@/components/sidebars/settings-bar/translation-mode-settings";

function ModeSwitcher() {
  return (
    <Tab defaultTab={0}>
      <div className="pe-[--gap-end] ps-[--gap-start]">
        <Tab.Trigger className="mb-4" />
      </div>
      <Tab.Content>
        <Tab.ContentItem label="Translation">
          <TranslationModeSettings />
        </Tab.ContentItem>
        <Tab.ContentItem label="Reading">
          <ReadingModeSettings />
        </Tab.ContentItem>
      </Tab.Content>
    </Tab>
  );
}

const sidebarVariants: Variants = {
  enter: (activeState: string) => ({
    x: activeState === "tab" ? "-100%" : "100%",
  }),
  center: {
    x: 0,
  },
  exit: (activeState: string) => ({
    x: activeState === "tab" ? "100%" : "-100%",
  }),
};

export function SettingsSidebar() {
  const { activeState } = useSettings();

  return (
    <AnimatePresence initial={false} mode="popLayout" custom={activeState}>
      <motion.div
        key={activeState}
        custom={activeState}
        variants={sidebarVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween", duration: 0.4 }}
        className="flex w-full flex-col overflow-hidden"
      >
        {activeState === "tab" && <ModeSwitcher />}
        {activeState === "tafsirs" && <Tafsirs />}
        {activeState === "translators" && <Translators />}
        {activeState === "fonts" && <ArabicFontFaces />}
      </motion.div>
    </AnimatePresence>
  );
}
