/* eslint-disable react/no-array-index-key */
import { Word } from "./word";
import { WordInteraction } from "./word-interaction";

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

export function ArabicContent({ verse }: { verse: VerseType }) {
  return (
    <p
      dir="rtl"
      className="font-arabic mb-4 flex flex-wrap gap-1 text-right text-2xl leading-loose"
      style={{
        fontSize: "var(--arabic-font-size)",
        lineHeight: "var(--arabic-line-height)",
        fontFamily: "kfgq",
      }}
    >
      {verse?.words.map((word, index) => {
        return (
          <WordInteraction key={index} wordMeaning={word.bn}>
            <Word>{word.uthmani}</Word>
          </WordInteraction>
        );
      })}
    </p>
  );
}
