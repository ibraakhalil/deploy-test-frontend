"use client";

import { getTranslationsBySurahId } from "@/lib/get-translations";
import { useSettings } from "@/stores/use-settings";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Virtuoso } from "react-virtuoso";
import { ArabicContent } from "./arabic-conten";
import { AyahCard } from "./ayah-card";
import { ActionBar } from "./ayah-card-actionbar";
import { AyahTranslations } from "./ayah-translations";

export type WordType = {
  ayah_id: number;
  surah_id: number;
  indopak: string;
  uthmani: string;
  en: string;
  bn: string;
  code_v2: string;
};

export interface VerseType {
  ayah_id: number;
  surah_id: number;
  words: WordType[];
}

export function AyahCardList({ verses, surahId }: { verses: VerseType[]; surahId: string }) {
  const { translators } = useSettings();

  const { data: translations, isLoading } = useQuery({
    queryKey: [surahId, translators],
    queryFn: () => getTranslationsBySurahId(surahId, translators.join(",")),
  });

  const items = useMemo(() => {
    return verses.map(verse => {
      const verseKey = `${verse.surah_id}:${verse.ayah_id}`;

      return (
        <AyahCard key={verse.ayah_id}>
          <AyahCard.Head info={verseKey} />
          <AyahCard.Body>
            <ActionBar verseKey={verseKey} />
            <AyahCard.Content>
              <ArabicContent verse={verse} />
              <AyahTranslations
                error={false}
                isLoading={isLoading}
                translations={translations && translations[verseKey]}
              />
            </AyahCard.Content>
          </AyahCard.Body>
        </AyahCard>
      );
    });
  }, [verses, translations, isLoading]);

  return (
    <div className="min-h-screen px-[--padding-x]">
      <Virtuoso useWindowScroll initialItemCount={3} totalCount={verses.length} itemContent={index => items[index]} />
    </div>
  );
}
