"use client";

import { SearchInput } from "@/components/common/search-input";
import { SidebarTitle } from "@/components/common/sidebar-title";
import { BookmarkFolderList } from "@/components/sidebars/bookmarks/bookmark-folder-list";
import { useSearch } from "@/hooks/use-search";
import { useCollectionModal } from "@/stores/use-collection-modal";

export function BookmarksSidebar() {
  const { bookmarks } = useCollectionModal();
  const { results, setSearchTerm } = useSearch(bookmarks, { keys: ["name", "id"] });

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <div className="pe-[--gap-end] ps-[--gap-start]">
        <SidebarTitle title="Bookmark" />
      </div>
      <div className="pe-[--gap-end] ps-[--gap-start]">
        <SearchInput onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <BookmarkFolderList folderList={results} />
    </div>
  );
}
