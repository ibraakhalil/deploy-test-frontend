"use client";

import { Tab } from "@/components/common/tab/tab";
import { JuzCards } from "@/components/sidebars/ayah-page/juz-cards";
import { PageCards } from "@/components/sidebars/ayah-page/page-cards";
import { SurahCards } from "@/components/sidebars/ayah-page/surah-cards";

export function AyahPageSidebar() {
  return (
    <Tab defaultTab={0}>
      <Tab.Trigger className="mb-4 me-[--gap-end] ms-[--gap-start]" />
      <Tab.Content>
        <Tab.ContentItem label="Surah" key="hadith">
          <SurahCards />
        </Tab.ContentItem>
        <Tab.ContentItem label="Juz" key="juz">
          <JuzCards />
        </Tab.ContentItem>
        <Tab.ContentItem label="Page" key="page">
          <PageCards />
        </Tab.ContentItem>
      </Tab.Content>
    </Tab>
  );
}
