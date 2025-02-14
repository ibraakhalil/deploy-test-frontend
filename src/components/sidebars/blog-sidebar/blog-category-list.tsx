import { ListCard } from "@/components/cards/list-card";
import { SearchInput } from "@/components/common/search-input";
import { surahList } from "@/constants/surah-list";
import { useSearch } from "@/hooks/use-search";

export function BlogCategoryList() {
  const { results, searchTerm, setSearchTerm } = useSearch(surahList, { keys: ["name", "id"] });

  return (
    <>
      <div className="mb-4 pe-[--gap-end] ps-[--gap-start]">
        <SearchInput
          type="text"
          placeholder="Search Blog Category"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="-z-10"
        />
      </div>
      <div className="space-y-2 overflow-auto pb-3 pe-[--gap-end] ps-[--gap-start]">
        {results.map(surah => (
          <ListCard key={surah.id}>
            <ListCard.ShortName title={surah.name} />
            <ListCard.Body title={surah.name} subtitle="Total Blogs 25" />
          </ListCard>
        ))}
      </div>
    </>
  );
}
