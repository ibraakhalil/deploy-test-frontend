import { ExpandableCard } from "@/components/cards/expandable-card";
import { ListCard } from "@/components/cards/list-card";
import { SearchInput } from "@/components/common/search-input";
import { Virtuoso } from "@/components/common/virtuoso";
import { juzList } from "@/constants/juz-list";
import { surahList } from "@/constants/surah-list";
import { useSearch } from "@/hooks/use-search";
import { Link } from "@/navigation";
import { Fragment, useCallback, useRef } from "react";
import { VirtuosoHandle } from "react-virtuoso";
import { Accordion } from "shadcn/components/ui/accordion";

export function JuzCards() {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const { results, searchTerm, setSearchTerm } = useSearch(juzList, { keys: ["juzList.vmap"] });

  const render = useCallback((juz: (typeof juzList)[number]) => {
    const surahIndexes = Object.keys(juz.vmap);

    return (
      <div className="pb-2 pe-[--gap-end] ps-[--gap-start]">
        <ExpandableCard value={`${juz.id}`}>
          <Link href={`/juz/${juz.id}`}>
            <ExpandableCard.Trigger className="justify-between border-none px-1 py-3">
              <div className="text-start">
                <h2 className="text-title font-medium text-primary">Juz {juz.id}</h2>
                <span className="text-subtitle text-subtitle-color-80">Al-Fatiha and More</span>
              </div>
              <div className="text-center text-subtitle font-medium text-subtitle-color">
                <span>{surahIndexes.length}</span>
                <p>Surah</p>
              </div>
            </ExpandableCard.Trigger>
          </Link>
          <ExpandableCard.Content className="max-h-[auto] space-y-2">
            {surahIndexes.map((surahIndex: string) => {
              const surah = surahList[parseInt(surahIndex, 10) - 1];

              return (
                <ListCard key={surahIndex} className="h-[76px] border-none bg-primary-bg">
                  <ListCard.ShortName>{surah?.id}</ListCard.ShortName>
                  <ListCard.Body title={surah?.name} subtitle={surah?.trans_en} />
                </ListCard>
              );
            })}
          </ExpandableCard.Content>
        </ExpandableCard>
      </div>
    );
  }, []);

  return (
    <Fragment>
      <div className="mb-4 pe-[--gap-end] ps-[--gap-start]">
        <SearchInput
          type="text"
          placeholder="Search Juz"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="-z-10"
        />
      </div>
      <Accordion type="single" collapsible asChild>
        <Virtuoso ref={virtuosoRef} className="pb-4" items={results} render={index => render(results[index])} />
      </Accordion>
    </Fragment>
  );
}
