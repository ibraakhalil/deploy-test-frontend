import { env } from "@/config/env";
import { notFound } from "next/navigation";

export const getTafsirWords = async (versekey: string) => {
  const [surahId, ayahId] = versekey.split(":");

  if (!ayahId) return notFound();

  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/wbw/by_surah/${surahId}?ayah_id=${ayahId}`);
  const verse = await res.json();

  if (!verse) return notFound();

  return verse[0];
};
