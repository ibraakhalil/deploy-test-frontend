/* eslint-disable no-console */
// Types based on the API response
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

interface Verse {
  id: number;
  verse_number: number;
  verse_key: string;
  text_uthmani: string;
  juz_number: number;
  hizb_number: number;
  rub_number: number;
  sajdah_type: null | string;
  sajdah_number: null | number;
  chapter_id: number;
  words: Word[];
}

interface ApiResponse {
  verses: Verse[];
  pagination: {
    per_page: number;
    current_page: number;
    next_page: number | null;
    total_pages: number;
    total_records: number;
  };
}

interface TransformedData {
  [pageNumber: string]: {
    [chapterId: string]: {
      [lineNumber: string]: Word[];
    };
  };
}

function transformQuranData(apiResponse: ApiResponse): TransformedData {
  const transformedData: TransformedData = {};

  apiResponse.verses.forEach(verse => {
    const chapterId = verse.chapter_id.toString();

    verse.words.forEach(word => {
      const pageNumber = word.page_number.toString();
      const lineNumber = word.line_number.toString();

      if (!transformedData[pageNumber]) {
        transformedData[pageNumber] = {};
      }
      if (!transformedData[pageNumber][chapterId]) {
        transformedData[pageNumber][chapterId] = {};
      }
      if (!transformedData[pageNumber][chapterId][lineNumber]) {
        transformedData[pageNumber][chapterId][lineNumber] = [];
      }

      transformedData[pageNumber][chapterId][lineNumber].push(word);
    });
  });

  return transformedData;
}

export async function getJuzData(juzId: number): Promise<TransformedData | null> {
  const url = `https://api.qurancdn.com/api/qdc/verses/by_juz/${juzId}?words=true&translation_fields=resource_name%2Clanguage_id&per_page=all&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&translations=131&reciter=2&word_translation_language=en&page=1&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ccode_v1%2Cqpc_uthmani_hafs&mushaf=2`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    const transformedData = transformQuranData(data);
    return transformedData;
  } catch (error) {
    console.error("Failed to fetch or transform Quran data:", error);
    return null; // Ensure a value is always returned
  }
}
