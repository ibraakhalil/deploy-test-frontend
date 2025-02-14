import { env } from "@/config/env";

export const getTranslationsBySurahId = async (surahId: string, translators: string) => {
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/translations/by_surah/${surahId}?translation=${translators}`);
  if (!res.ok) {
    throw new Error(`Error fetching translations: ${res.status} ${res.statusText}`);
  }
  const results = await res.json();
  return results;
};

export const getTafsirTranslation = async (verseKey: string, translators: string) => {
  const [surahId, ayahId] = verseKey.split(":");

  const res = await fetch(
    `${env.NEXT_PUBLIC_SERVER_URL}/translations/by_surah/${surahId}?translation=${translators}&ayah_id=${ayahId}`
  );
  if (!res.ok) {
    throw new Error(`Error fetching translations: ${res.status} ${res.statusText}`);
  }
  const results = await res.json();
  return results[verseKey];
};
