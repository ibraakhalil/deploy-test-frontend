"use client";

import React from "react";
import { UnicodeSinglePage } from "@/components/reading-mode/unicode-mushaf/unicode-single-page";

interface Word {
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
    [pageNumber: string]: {
      [lineNumber: string]: Word[];
    };
  };
}

interface UnicodeMushafPageProps {
  juzData: QuranData;
}

export function UnicodeJuzPage({ juzData }: UnicodeMushafPageProps) {
  return (
    <div>
      {Object.entries(juzData).map(([surahId, surahData]) => {
        return <UnicodeSinglePage key={surahId} pageData={surahData} />;
      })}
    </div>
  );
}
