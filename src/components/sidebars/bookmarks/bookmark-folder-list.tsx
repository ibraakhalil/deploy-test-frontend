import { ExpandableCard } from "@/components/cards/expandable-card";
import { ListCard } from "@/components/cards/list-card";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { DeleteModal } from "@/components/modals/delete-modal";
import { FolderIcon, TrashBeenIcon } from "@/components/svg";
import { Accordion } from "shadcn/components/ui/accordion";

interface FolderType {
  id: string;
  color: string;
  name: string;
  items: string[];
}

interface BookmarkFolderListProps {
  folderList: FolderType[];
}

export function BookmarkFolderList({ folderList }: BookmarkFolderListProps) {
  return (
    <Accordion type="single" collapsible className="flex-grow overflow-auto pb-4 pe-[--gap-end] ps-[--gap-start]">
      {folderList.map(folder => (
        <ExpandableCard key={folder.id} value={`${folder.id}`}>
          <ExpandableCard.Trigger>
            <FolderIcon className="size-8" color={folder.color} />
            <ListCard.Body title={folder.name} subtitle={`Total Ayah: ${folder.items.length}`} />
          </ExpandableCard.Trigger>
          <ExpandableCard.Content>
            <ul>
              {folder.items.map(item => (
                <li
                  key={item}
                  className="flex cursor-pointer items-center justify-between p-3 text-base duration-150 hover:font-semibold hover:text-primary"
                >
                  <p>Ayah: {item}</p>
                  <ResponsiveDialog>
                    <ResponsiveDialog.Trigger>
                      <TrashBeenIcon className="size-[18px] text-icon-color" />
                    </ResponsiveDialog.Trigger>
                    <ResponsiveDialog.Content className="gap-0 tablet:max-w-[450px]">
                      <DeleteModal text="Do you want to delete this bookmark folder?" onSubmit={() => ""} />
                    </ResponsiveDialog.Content>
                  </ResponsiveDialog>
                </li>
              ))}
            </ul>
          </ExpandableCard.Content>
        </ExpandableCard>
      ))}
    </Accordion>
  );
}
