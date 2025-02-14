/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { EditBookmarkModal } from "@/components/modals/bookmark-modal/edit-bookmark-modal";
import { DeleteModal } from "@/components/modals/delete-modal";
import { EditIcon, TrashBeenIcon } from "@/components/svg";
import { bookmarkStorage } from "@/hooks/get-bookmarks";
import { useCollectionModal } from "@/stores/use-collection-modal";
import { cn } from "shadcn/lib/utils";

export interface BookmarkType {
  id: string;
  name: string;
  color: string;
  items: string[];
}

interface CollectionCardEditDropdownProps extends React.ComponentProps<"div"> {
  bookmark: BookmarkType;
}

function ActionItem({ Icon, text }: { Icon: any; text: string }) {
  return (
    <div className="group flex w-full cursor-pointer items-center gap-4 rounded p-2 duration-300 hover:bg-secondary-bg">
      <Icon className="text-icon-color group-hover:text-primary" />
      <p className="text-base font-medium text-subtitle-color-secondary group-hover:text-primary">{text}</p>
    </div>
  );
}

export function BookmarkActionDropdown({ bookmark, className }: CollectionCardEditDropdownProps) {
  const { setBookmarks } = useCollectionModal();
  const handleDelete = () => {
    const updates = bookmarkStorage.deleteFolder({ id: bookmark.id });
    setBookmarks(updates);
  };
  const handleEdit = ({ name, color }: { name: string; color: string }) => {
    const data = { name, color };
    const updates = bookmarkStorage.edit({ id: bookmark.id, data });
    setBookmarks(updates);
  };

  return (
    <div className={cn("flex flex-col space-y-1 rounded-md bg-card-bg p-2 shadow-dropdown-shadow", className)}>
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger>
          <ActionItem Icon={EditIcon} text="Edit" />
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content className="gap-0 tablet:max-w-[450px]">
          <EditBookmarkModal name={bookmark.name} color={bookmark.color} onEditBookmark={handleEdit} />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger>
          <ActionItem Icon={TrashBeenIcon} text="Delete" />
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content className="gap-0 tablet:max-w-[450px]">
          <DeleteModal text="Do you want to delete this bookmark folder?" onSubmit={handleDelete} />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
    </div>
  );
}

export function PinActionDropdown({ className }: CollectionCardEditDropdownProps) {
  const handleDelete = () => {};

  return (
    <div className={cn("flex flex-col rounded-md bg-card-bg p-2 shadow-dropdown-shadow", className)}>
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger>
          <ActionItem Icon={TrashBeenIcon} text="Delete" />
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content className="gap-0 tablet:max-w-[450px]">
          <DeleteModal text="Do you want to delete this Pin?" onSubmit={handleDelete} />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
    </div>
  );
}
