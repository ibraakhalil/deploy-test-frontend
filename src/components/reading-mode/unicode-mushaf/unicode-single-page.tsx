"use client";

import { SurahTitleCard } from "@/components/cards/surah-title-card";
import { surahList } from "@/constants/surah-list";
import React from "react";
import { UnicodePage } from "@/components/reading-mode/unicode-mushaf/unicode-page";

interface WordType {
  id: number;
  position: number;
  verse_key: string;
  verse_id: number;
  page_number: number;
  line_number: number;
  text_uthmani: string;
  code_v1: string;
  qpc_uthmani_hafs: string;
}

interface QuranData {
  [chapterId: string]: {
    [lineNumber: string]: WordType[];
  };
}

export function UnicodeSinglePage({ pageData }: { pageData: QuranData }) {
  return (
    <div className="border-b border-border-color">
      {Object.entries(pageData).map(([chapterId, lines]) => {
        const surahInfo = surahList.find(surah => surah.id === parseInt(chapterId, 10));
        const isFirstAyah = Object.values(lines)[0][0].verse_key === `${chapterId}:1`;

        return (
          <div key={chapterId}>
            {isFirstAyah && (
              <SurahTitleCard>
                <SurahTitleCard.Revelation place={surahInfo?.place || "makkah"} />
                <div className="flex flex-col items-center gap-5">
                  <SurahTitleCard.Title
                    title={surahInfo?.name || "Al-Fatihah"}
                    subtitle={`Ayah ${surahInfo?.count} - ${surahInfo?.place}`}
                  />
                  <SurahTitleCard.Bismillah />
                </div>
              </SurahTitleCard>
            )}
            <UnicodePage pageData={lines} />
          </div>
        );
      })}
    </div>
  );
}
