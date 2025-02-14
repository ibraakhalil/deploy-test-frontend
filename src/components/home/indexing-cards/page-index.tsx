import { ListCard } from "@/components/cards/list-card";
import { HadithBookChapterListLink } from "@/components/links/hadith-books.link";
import { useCallback, useState } from "react";
import { ShowMoreButton } from "./show-more-button";

const listCards = Array.from({ length: 604 }, (_, i) => i + 1);
const INITIAL_DISPLAY_COUNT = 50;

export function PageIndex() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? listCards.length : INITIAL_DISPLAY_COUNT;
  const handleToggle = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  return (
    <div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2 tablet:gap-4">
        {listCards.slice(0, displayedItems).map(card => (
          <HadithBookChapterListLink key={card} bookName="sahih-bukhari">
            <ListCard className="h-[76px]">
              <ListCard.ShortName>{card.toString().padStart(2, "0")}</ListCard.ShortName>
              <ListCard.Body title={`Page ${card}`} />
            </ListCard>
          </HadithBookChapterListLink>
        ))}
      </div>
      <ShowMoreButton onClick={handleToggle} />
    </div>
  );
}
