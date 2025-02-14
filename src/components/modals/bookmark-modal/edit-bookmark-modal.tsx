import { ModalButton } from "@/components/common/buttons";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { CollectionNameInput, ColorSelection } from "@/components/modals/bookmark-modal/create-collection";
import { FolderIcon } from "@/components/svg";
import { useState } from "react";

interface EditBookmarkModalProps {
  name: string;
  color: string;
  onEditBookmark: ({ name, color }: { name: string; color: string }) => void;
}

export function EditBookmarkModal({ name, color, onEditBookmark }: EditBookmarkModalProps) {
  const [selectedColor, setSelectedColor] = useState(color);
  const [inputValue, setInputValue] = useState(name);

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <h3 className="py-4 text-center text-heading-6 font-bold">Edit Bookmark</h3>
      <div className="space-y-6 bg-card-bg px-6 pb-8">
        <CollectionNameInput
          title="Change Bookmark Name"
          defaultValue={inputValue}
          onChange={e => handleChange(e.target.value)}
        >
          <FolderIcon className="size-8" color={selectedColor} />
        </CollectionNameInput>
        <ColorSelection
          title="Change Folder Name"
          selectedColor={selectedColor}
          onColorChange={c => setSelectedColor(c)}
        />
      </div>
      <div className="flex w-full items-center max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3">
        <ResponsiveDialog.Close className="w-full" asChild>
          <ModalButton className="bg-secondary-bg max-tablet:rounded-md">Cancel</ModalButton>
        </ResponsiveDialog.Close>
        <ModalButton
          disabled={!inputValue}
          onClick={() => onEditBookmark({ name: inputValue, color: selectedColor })}
          className="max-tablet:rounded-md"
        >
          Done
        </ModalButton>
      </div>
    </div>
  );
}
