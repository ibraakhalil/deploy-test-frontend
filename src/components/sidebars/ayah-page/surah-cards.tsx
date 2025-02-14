import { ListCard } from "@/components/cards/list-card";
import { SearchInput } from "@/components/common/search-input";
import { Virtuoso } from "@/components/common/virtuoso";
import { surahList } from "@/constants/surah-list";
import { useSearch } from "@/hooks/use-search";
import { Link } from "@/navigation";
import { Fragment, useCallback, useRef } from "react";
import { VirtuosoHandle } from "react-virtuoso";

export function SurahCards() {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const { results, searchTerm, setSearchTerm } = useSearch(surahList, { keys: ["name", "id"] });

  const render = useCallback(
    (surah: (typeof surahList)[number]) => (
      <Link href={`/${surah.id}`} key={surah.id} className="block pb-2 pe-[--gap-end] ps-[--gap-start]">
        <ListCard className="h-[76px]">
          <ListCard.ShortName>{surah.id}</ListCard.ShortName>
          <ListCard.Body title={surah.name} subtitle={surah.trans_en} />
        </ListCard>
      </Link>
    ),
    []
  );

  return (
    <Fragment>
      <div className="mb-4 pe-[--gap-end] ps-[--gap-start]">
        <SearchInput
          type="text"
          placeholder="Search Surah"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="-z-10"
        />
      </div>
      <Virtuoso
        ref={virtuosoRef}
        className="pb-4"
        items={results}
        initialItemCount={10}
        render={index => render(results[index])}
      />
    </Fragment>
  );
}
