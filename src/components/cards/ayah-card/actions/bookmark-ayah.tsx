"use client";

import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { Tooltip } from "@/components/common/tooltip";
import { BookmarkModal } from "@/components/modals/bookmark-modal/bookark-modal";
import { BookmarkIcon, BookmarkIconFill, BookmarkMultipleIcon } from "@/components/svg";
import { useActionBar } from "@/contexts/actions-provider";
import { useCollectionModal } from "@/stores/use-collection-modal";

export function BookmarkAyah({ label, ...props }: ActionTriggerProps) {
  const { bookmarks } = useCollectionModal();
  const { verseKey } = useActionBar();
  const folderCount = bookmarks.filter(f => f.items.includes(verseKey)).length;

  return (
    <ResponsiveDialog>
      <ResponsiveDialog.Trigger className="w-full" asChild>
        <Tooltip content="Bookmark">
          <ActionTrigger label={label} hover {...props}>
            {folderCount === 0 && <BookmarkIcon className="size-5 text-icon-color" />}
            {folderCount === 1 && <BookmarkIconFill className="size-5 text-icon-color" />}
            {folderCount > 1 && <BookmarkMultipleIcon className="size-5 text-icon-color" />}
          </ActionTrigger>
        </Tooltip>
      </ResponsiveDialog.Trigger>
      <ResponsiveDialog.Content className="transform-gpu">
        <BookmarkModal />
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
