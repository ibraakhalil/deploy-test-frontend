"use client";

import { Tab } from "@/components/common/tab";
import { DropDownArrowIcon } from "@/components/svg";
import { useSettings } from "@/stores/use-settings";

const uthmaniFonts = [
  { name: "KFGQ", value: "kfgq" },
  { name: "KFGQ V2", value: "kfgq_v2" },
  { name: "Me Quran", value: "me_quran" },
  { name: "Al Mushaf", value: "al_mushaf" },
  { name: "PDMS Saleem Quran", value: "pdms_saleem_quran" },
  { name: "PDMS Islamic", value: "pdms_islamic" },
  { name: "Al Qalam Quran Majeed", value: "al_qalam_quran_majeed" },
  { name: "Amiri Quran", value: "amiri_quran" },
];

const indopakFonts = [
  { name: "Noor E Huda", value: "noor_e_huda" },
  { name: "Noor E Hedayet", value: "noor_e_hedayet" },
  { name: "Noor E Hira", value: "noor_e_hira" },
];

export function ArabicFontFaces() {
  const { setActiveState } = useSettings();

  return (
    <div className="space-y-5 pe-[--gap-end] ps-[--gap-start]">
      <button
        onClick={() => setActiveState("tab")}
        className="flex items-center gap-3 text-body font-semibold text-primary"
      >
        <DropDownArrowIcon className="size-5 rotate-90" /> Select Arabic Font
      </button>
      <div>
        <Tab defaultTab={0}>
          <Tab.Trigger />
          <Tab.Content>
            <Tab.ContentItem label="Uthmani">
              <div className="mt-4 space-y-1">
                {uthmaniFonts.map(font => (
                  <button
                    key={font.value}
                    className="w-full rounded-sm px-3 py-1 text-left text-base text-subtitle-color hover:bg-secondary-bg"
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </Tab.ContentItem>
            <Tab.ContentItem label="Indopak">
              <div className="mt-4 space-y-1">
                {indopakFonts.map(font => (
                  <button
                    key={font.value}
                    className="w-full rounded-sm px-3 py-1 text-left text-base text-subtitle-color hover:bg-secondary-bg"
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </Tab.ContentItem>
          </Tab.Content>
        </Tab>
      </div>
    </div>
  );
}
