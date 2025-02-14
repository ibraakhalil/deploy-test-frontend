"use client";

import React from "react";
import { Word } from "@/components/cards/ayah-card/word";
import { WordInteraction } from "@/components/cards/ayah-card/word-interaction";

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
  [lineNumber: string]: WordType[];
}

export function UnicodePage({ pageData }: { pageData: QuranData }) {
  return (
    <div dir="rtl" className="mx-auto w-[90%] py-10 tablet:w-[600px]">
      {Object.entries(pageData).map(([lineNumber, words]) => (
        <p key={lineNumber} className="mb-2 flex w-full justify-between text-justify text-[5cqw] tablet:text-heading-3">
          {words.map(word => (
            <WordInteraction wordMeaning="meaning" key={word.id}>
              <Word>{word.text_uthmani}</Word>
            </WordInteraction>
          ))}
        </p>
      ))}
    </div>
  );
}
