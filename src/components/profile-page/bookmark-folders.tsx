import { CollectionCard } from "@/components/cards/collection-card";
import { BookmarkActionDropdown } from "@/components/cards/collection-card-action-dropdown";
import { BookmarkItemsLink } from "@/components/links/profile-and-collection.link";
import { Collection } from "@/components/profile-page/compound-collection";
import { FolderIcon } from "@/components/svg";
import { ComponentProps } from "react";

export interface BookmarkType {
  id: string;
  name: string;
  color: string;
  items: string[];
}

interface BookmarkFoldersProps extends ComponentProps<"div"> {
  bookmarks: BookmarkType[];
}

export function BookmarkFolders({ bookmarks }: BookmarkFoldersProps) {
  return (
    <Collection.CardWrapper>
      {bookmarks.map((bookmark: BookmarkType) => (
        <div key={bookmark.name} className="relative isolate">
          <BookmarkItemsLink bookmarkItemId={bookmark.id}>
            <CollectionCard>
              <CollectionCard.Head>
                <FolderIcon color={bookmark.color} />
              </CollectionCard.Head>
              <CollectionCard.Body title={bookmark.name} subtitle={`Total ${bookmark.items.length} Ayah`} />
            </CollectionCard>
          </BookmarkItemsLink>
          <CollectionCard.Actions className="justify-self-end">
            <BookmarkActionDropdown bookmark={bookmark} />
          </CollectionCard.Actions>
        </div>
      ))}
    </Collection.CardWrapper>
  );
}
