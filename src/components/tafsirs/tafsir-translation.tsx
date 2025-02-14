"use client";

import { getTafsirTranslation } from "@/lib/get-translations";
import { useSettings } from "@/stores/use-settings";
import { useQuery } from "react-query";
import { AyahTranslations } from "../cards/ayah-card/ayah-translations";

export function TafsirTranslation({ verseKey }: { verseKey: string }) {
  const { translators } = useSettings();
  const { data, isLoading, error } = useQuery({
    queryKey: [verseKey, translators],
    queryFn: () => getTafsirTranslation(verseKey, translators.join(",")),
  });

  return <AyahTranslations isLoading={isLoading} translations={data} error={!!error} />;
}
