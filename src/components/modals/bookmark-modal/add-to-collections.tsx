import { ModalButton } from "@/components/common/buttons";
import { useResponsiveDialog } from "@/components/common/responsive-dialog";
import { Tab } from "@/components/common/tab";
import { BookmarkContent } from "@/components/modals/bookmark-modal/bookmark-content";
import { PinContent } from "@/components/modals/bookmark-modal/pin-content";
import { useActionBar } from "@/contexts/actions-provider";
import { bookmarkStorage } from "@/hooks/get-bookmarks";
import { useCollectionModal } from "@/stores/use-collection-modal";
import { useState } from "react";

export function AddToCollections() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const { setIsCreateCollection, setBookmarks } = useCollectionModal();
  const { close } = useResponsiveDialog();
  const { verseKey } = useActionBar();

  const handleDone = () => {
    const updates = bookmarkStorage.update({ value: verseKey, folderIds: Array.from(selectedOptions) });
    setBookmarks(updates);
    close();
  };

  return (
    <div className="space-y-3">
      <Tab defaultTab={0}>
        <div className="px-[--padding-x]">
          <Tab.Trigger />
        </div>
        <Tab.Content>
          <Tab.ContentItem label="Bookmarks">
            <BookmarkContent selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          </Tab.ContentItem>
          <Tab.ContentItem label="Pins">
            <PinContent />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
      <div className="flex w-full max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3">
        <ModalButton onClick={() => setIsCreateCollection(true)} className="max-tablet:rounded-md">
          Create New
        </ModalButton>
        <ModalButton onClick={handleDone} className="bg-secondary-bg max-tablet:rounded-md">
          Done
        </ModalButton>
      </div>
    </div>
  );
}
