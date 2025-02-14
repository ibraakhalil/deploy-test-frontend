"use client";

import { PageWrapper } from "@/components/common/page-wrapper";
import { BookmarkFolders } from "@/components/profile-page/bookmark-folders";
import { ActionItems, Collection } from "@/components/profile-page/compound-collection";
import { BookmarkNotFoundIcon } from "@/components/svg";
import { bookmarkDummyFolders } from "@/constants/dummy-data";
import { useSearch } from "@/hooks/use-search";
import { useCollectionModal } from "@/stores/use-collection-modal";

export default function Page() {
  const { bookmarks } = useCollectionModal();
  const { results, setSearchTerm } = useSearch(bookmarks, { keys: ["name"] });
  const hasItems = bookmarkDummyFolders.length > 0;

  return (
    <PageWrapper>
      <Collection>
        <Collection.Header title="All Bookmarks">
          <Collection.Actions>
            <ActionItems />
          </Collection.Actions>
          <Collection.Search onChange={e => setSearchTerm(e.target.value)} />
        </Collection.Header>
        {hasItems && <BookmarkFolders bookmarks={results} />}
        {!hasItems && (
          <Collection.Empty message="You don’t have any bookmark">
            <BookmarkNotFoundIcon />
          </Collection.Empty>
        )}
      </Collection>
    </PageWrapper>
  );
}
