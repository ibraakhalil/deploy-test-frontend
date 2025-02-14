"use client";

import { AyahCard } from "@/components/cards/ayah-card/ayah-card";
import { ActionBar } from "@/components/cards/ayah-card/ayah-card-actionbar";
import { ArabicContent } from "../cards/ayah-card/arabic-conten";

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

export function BookmarkedAyahList({ data }: { data: VerseType[] }) {
  if (!data) {
    return null;
  }

  return (
    <div className="relative px-[--padding-x]">
      {data.map(verse => {
        const verseKey = `${verse.surah_id}:${verse.ayah_id}`;

        return (
          <AyahCard key={verse.ayah_id} className="relative">
            <AyahCard.Head info={verseKey} />
            <AyahCard.Body>
              <ActionBar exclude={["bookmark", "pin"]} verseKey={verseKey} />
              <AyahCard.Content>
                <ArabicContent verse={verse} />
                {/* <AyahTranslations /> */}
              </AyahCard.Content>
            </AyahCard.Body>
          </AyahCard>
        );
      })}
    </div>
  );
}
