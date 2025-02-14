import { ListCard } from "@/components/cards/list-card";
import { HadithBookChapterListLink } from "@/components/links/hadith-books.link";
import { juzList } from "@/constants/juz-list";
import { surahList } from "@/constants/surah-list";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ShowMoreButton } from "@/components/home/indexing-cards/show-more-button";

const INITIAL_DISPLAY_COUNT = 14;

export function JuzIndex() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? juzList.length : INITIAL_DISPLAY_COUNT;
  const handleToggle = () => {
    setShowAll(prev => !prev);
  };

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 728: 2, 1024: 3, 1440: 4 }}>
        <Masonry gutter="16px">
          {juzList.slice(0, displayedItems).map(juz => (
            <div key={juz.id} className="flex flex-col gap-3 rounded-md bg-secondary-bg p-4">
              <h2 className="text-title font-medium text-primary">Juz {juz.id}</h2>
              {Object.keys(juz.vmap).map((surahIndex: string) => {
                const surah = surahList[parseInt(surahIndex, 10) - 1];

                return (
                  <HadithBookChapterListLink key={juz.id} bookName="sahih-bukhari">
                    <ListCard className="h-[76px] border-none bg-primary-fg">
                      <ListCard.ShortName>{surah?.id.toString().padStart(2, "0")}</ListCard.ShortName>
                      <ListCard.Body title={surah?.name} subtitle={surah?.trans_en} />
                    </ListCard>
                  </HadithBookChapterListLink>
                );
              })}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <ShowMoreButton onClick={handleToggle} />
    </div>
  );
}
