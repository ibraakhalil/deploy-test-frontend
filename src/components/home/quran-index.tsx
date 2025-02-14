"use client";

import { Tab } from "@/components/common/tab";
import { JuzIndex } from "@/components/home/indexing-cards/juz-index";
import { PageIndex } from "@/components/home/indexing-cards/page-index";
import { SurahIndex } from "@/components/home/indexing-cards/surah-index";

export function QuranIndex() {
  return (
    <div className="mx-auto flex w-full max-w-[--container-width] flex-col items-center gap-4 overflow-hidden px-4 tablet:gap-[28px] tablet:px-10 desktop:px-0">
      <Tab defaultTab={0} animationType="vertical">
        <div className="flex w-full items-center justify-center tablet:justify-between">
          <h1 className="text-heading-4 font-bold max-tablet:hidden laptop:text-heading-3">Quran Mazid</h1>
          <Tab.Trigger className="w-[350px]" />
        </div>
        <Tab.Content>
          <Tab.ContentItem label="Surah">
            <SurahIndex />
          </Tab.ContentItem>
          <Tab.ContentItem label="Juz">
            <JuzIndex />
          </Tab.ContentItem>
          <Tab.ContentItem label="Page">
            <PageIndex />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
}
