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
  [pageNumber: string]: {
    [chapterId: string]: {
      [lineNumber: string]: Word[];
    };
  };
}
interface UnicodeSurahPageProps {
  surahData: QuranData;
}

export function UnicodeSurahPage({ surahData }: UnicodeSurahPageProps) {
  const surahId = Object.keys(surahData)[0];

  return Object.values(surahData).map(pageData => {
    return <UnicodeSinglePage key={surahId} pageData={pageData} />;
  });
}
