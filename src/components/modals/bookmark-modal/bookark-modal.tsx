"use client";

import { AddToCollections } from "@/components/modals/bookmark-modal/add-to-collections";
import { CreateCollection } from "@/components/modals/bookmark-modal/create-collection";
import { useCollectionModal } from "@/stores/use-collection-modal";

export function BookmarkModal() {
  const { isCreateCollection } = useCollectionModal();

  return (
    <div className="[--height:240px] [--padding-x:1.25rem] tablet:[--padding-x:1.5rem]">
      <h3 className="py-4 text-center text-heading-6 font-bold">Add to Collections</h3>
      {isCreateCollection ? <CreateCollection /> : <AddToCollections />}
    </div>
  );
}
