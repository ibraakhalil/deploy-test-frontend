"use client";

import { AyahCard } from "@/components/cards/ayah-card/ayah-card";
import { ActionBar } from "@/components/cards/ayah-card/ayah-card-actionbar";
import { IconContainer } from "@/components/common/icon-container";
import { GotoLInkIcon } from "@/components/svg";
import { Link } from "@/navigation";
import { ArabicData, SearchResponse, TafsirData, TranslationData } from "@/types/search-type";
import { ArabicContent } from "../cards/ayah-card/arabic-conten";
import { AyahTranslations } from "../cards/ayah-card/ayah-translations";
import { SearchNotFound } from "../common/not-found";
import { Tooltip } from "../common/tooltip";
import { SearchAyahArabic } from "./search-ayah-arabic";
import { SearchAyahTafsir } from "./search-ayah-tafsir";

interface SearchCardListProps {
  results: SearchResponse;
}

export function SearchCardList({ results }: SearchCardListProps) {
  const searchText = results.searchTerms.join(" ");
  const data = results.arabicData || results.translationsData || results.tafsirData || [];

  return (
    <div className="px-[--padding-x]">
      {data.length > 0 &&
        data.map(verse => {
          const verseKey = `${verse.surah_id}:${verse.ayah_id}`;

          return (
            <AyahCard key={verseKey}>
              <AyahCard.Head info={verseKey}>
                <Link href={`/${verse.surah_id}`} className="text-end">
                  <Tooltip title="Go to Ayah">
                    <IconContainer hover>
                      <GotoLInkIcon />
                    </IconContainer>
                  </Tooltip>
                </Link>
              </AyahCard.Head>
              <AyahCard.Body>
                <ActionBar verseKey={verseKey} />
                <AyahCard.Content>
                  {results.arabicData ? (
                    <SearchAyahArabic searchText={searchText} text={(verse as ArabicData).uthmani} />
                  ) : (
                    <ArabicContent verse={verse as TranslationData} />
                  )}
                  {results.translationsData && (
                    <AyahTranslations isLoading={false} translations={(verse as TranslationData).translations} />
                  )}
                  {results.tafsirData && (
                    <SearchAyahTafsir tafsir={(verse as TafsirData).tafsir} searchText={searchText} />
                  )}
                </AyahCard.Content>
              </AyahCard.Body>
            </AyahCard>
          );
        })}
      {data.length === 0 && <SearchNotFound searchText={searchText} />}
    </div>
  );
}
