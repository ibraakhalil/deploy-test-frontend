import { RecentNavigation } from "@/components/modals/search-modal/recent-navigation";
import { SearchSuggetion } from "@/components/modals/search-modal/search-suggetion";
import { TryToNavigate } from "@/components/modals/search-modal/try-to-navigate";
import { useSearchModal } from "@/stores/use-search-modal";

export function QuickSearch() {
  const searchValue = useSearchModal(state => state.searchValue);
  const isValue = searchValue === "";

  return (
    <div className="space-y-6 px-[--padding-x]">
      <TryToNavigate />
      {isValue ? <RecentNavigation /> : <SearchSuggetion />}
    </div>
  );
}
