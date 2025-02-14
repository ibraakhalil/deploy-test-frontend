"use client";

import { Link } from "@/navigation";
import { surahList } from "@/constants/surah-list";
import { ListCard } from "@/components/cards/list-card";
import { useCallback, useState } from "react";
import { ShowMoreButton } from "./show-more-button";

const INITIAL_DISPLAY_COUNT = 20;

export function SurahIndex() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? surahList.length : INITIAL_DISPLAY_COUNT;
  const handleToggle = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  return (
    <div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 tablet:gap-4">
        {surahList.slice(0, displayedItems).map(surah => (
          <Link key={surah.id} href={surah.id.toString()}>
            <ListCard className="h-[76px]">
              <ListCard.ShortName>{surah.id.toString().padStart(2, "0")}</ListCard.ShortName>
              <ListCard.Body title={surah.name} subtitle={surah.trans_en} />
              <ListCard.Calligraphy>{surah.id.toString().padStart(3, "0")}</ListCard.Calligraphy>
            </ListCard>
          </Link>
        ))}
      </div>
      <ShowMoreButton onClick={handleToggle}>{showAll ? "Show Less" : "Show More"}</ShowMoreButton>
    </div>
  );
}
