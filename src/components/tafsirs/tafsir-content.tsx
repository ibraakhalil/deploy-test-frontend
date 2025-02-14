/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */

"use client";

import { TafsirAcions } from "@/components/tafsirs/tafsir-actions";
import { env } from "@/config/env";
import { tafsirObjectList } from "@/constants/dummy-data";
import { useSettings } from "@/stores/use-settings";
import DOMPurify from "dompurify";
import { useQuery } from "react-query";

interface TafsirData {
  surah_id: string;
  ayah_id: string;
  tafsir_text: string;
}

interface TafsirContentProps {
  verseKey: string;
}

const fetchTafsirByVerseKey = async (surahId: string, ayahId: string, tafsirName: string): Promise<TafsirData[]> => {
  const response = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/tafsir/${surahId}/${ayahId}?name=${tafsirName}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch tafsir: ${response.statusText}`);
  }

  return response.json();
};

function TafsirSkeleton() {
  return (
    <div className="animate-pulse px-[--padding-x] py-6">
      <div className="mb-12 h-10 rounded-sm bg-secondary-bg" />
      {[...Array(6)].map((_, index) => (
        <div key={index} className="mb-3 h-5 rounded-sm bg-secondary-bg" />
      ))}
    </div>
  );
}

export function TafsirContent({ verseKey }: TafsirContentProps) {
  const { activeTafsir } = useSettings();
  const [surahId, ayahId] = verseKey.split(":");

  const {
    data: tafsirData,
    isLoading,
    error,
  } = useQuery<TafsirData[]>({
    queryKey: ["tafsir", verseKey, activeTafsir],
    queryFn: () => fetchTafsirByVerseKey(surahId, ayahId, activeTafsir),
  });

  if (isLoading) {
    return <TafsirSkeleton />;
  }

  if (error || !tafsirData?.[0]) {
    return (
      <div className="text-error px-[--padding-x] py-6">Failed to load tafsir content. Please try again later.</div>
    );
  }

  const tafsir = tafsirData[0];
  const tafsirInfo = tafsirObjectList[activeTafsir];
  const sanitizedText = DOMPurify.sanitize(tafsir.tafsir_text);

  return (
    <div className="px-[--padding-x]">
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-body font-semibold text-primary tablet:text-heading-4">
          Tafsir &apos;{tafsirInfo.name}&apos; ({tafsirInfo.lang})
        </h1>
        <TafsirAcions className="hidden tablet:block" />
      </div>
      <div className="prose prose-sm max-w-none text-body" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </div>
  );
}
