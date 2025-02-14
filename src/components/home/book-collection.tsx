import { ListCard } from "@/components/cards/list-card";
import { HadithBookChapterListLink, HadithBooksLink } from "@/components/links/hadith-books.link";
import { LongArrowIcon, MegaMenuIconFill } from "@/components/svg";

export function BookCollection() {
  const listCards = Array.from({ length: 19 }, (_, i) => i + 1);
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2 tablet:gap-4">
      {listCards.map(card => (
        <HadithBookChapterListLink key={card} bookName="sahih-bukhari">
          <ListCard className="h-[76px]">
            <ListCard.ShortName title="Sahih Bukhari" />
            <ListCard.Body title="Sahih Bukhari" subtitle="Hadith Collection" />
          </ListCard>
        </HadithBookChapterListLink>
      ))}
      <HadithBooksLink>
        <ListCard className="h-[76px] justify-between">
          <ListCard.ShortName>
            <MegaMenuIconFill className="size-5" />
          </ListCard.ShortName>
          <ListCard.Body className="w-full" title="See More" subtitle="Total Book 25" />
          <LongArrowIcon className="size-[34px]" />
        </ListCard>
      </HadithBooksLink>
    </div>
  );
}
