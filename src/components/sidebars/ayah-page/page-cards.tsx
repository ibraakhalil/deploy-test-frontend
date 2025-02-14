import { ListCard } from "@/components/cards/list-card";
import { SearchInput } from "@/components/common/search-input";
import { Virtuoso } from "@/components/common/virtuoso";
import { useSearch } from "@/hooks/use-search";
import { Link } from "@/navigation";
import { serializeNumber } from "@/utils/serialize-number";
import { Fragment, useCallback, useRef } from "react";
import { VirtuosoHandle } from "react-virtuoso";

const items = Array.from({ length: 604 }, (_, i) => ({ id: i + 1 }));

export function PageCards() {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const { results, searchTerm, setSearchTerm } = useSearch(items, { keys: ["id"] });

  const render = useCallback(
    (item: (typeof items)[number]) => (
      <Link href={`/page/${item.id}`} key={item.id} className="block pb-2 pe-[--gap-end] ps-[--gap-start]">
        <ListCard className="h-[76px]">
          <ListCard.ShortName>{serializeNumber(item.id)}</ListCard.ShortName>
          <ListCard.Body title={`Page ${item.id}`} />
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
          placeholder="Search Page"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="-z-10"
        />
      </div>
      <Virtuoso ref={virtuosoRef} className="pb-4" items={results} render={index => render(results[index])} />
    </Fragment>
  );
}
