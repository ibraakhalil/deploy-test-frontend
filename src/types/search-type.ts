interface Word {
  ayah_id: number;
  surah_id: number;
  indopak: string;
  uthmani: string;
  en: string;
  bn: string;
  code_v2: string;
}

export interface ArabicData {
  surah_id: number;
  ayah_id: number;
  uthmani: string;
  indopak: string;
}

export interface TafsirData {
  surah_id: string;
  ayah_id: string;
  tafsir: string;
}

export interface TranslationData {
  id: number;
  surah_id: number;
  ayah_id: number;
  translations: { value: string; text: string }[];
  words: Word[];
}

export interface SearchResponse {
  arabicData?: ArabicData[];
  tafsirData?: TafsirData[];
  translationsData?: TranslationData[];
  count: number;
  pageNumber: string;
  pageLimit: number;
  searchTerms: string[];
}
