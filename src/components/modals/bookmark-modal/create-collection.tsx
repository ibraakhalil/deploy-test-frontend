/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalButton } from "@/components/common/buttons";
import { RadioButton } from "@/components/common/radio-btn";
import { FolderIcon, PinIconAngularFill, TickCircleIcon } from "@/components/svg";
import { BOOKMARK_COLORS } from "@/constants/profile";
import { bookmarkStorage } from "@/hooks/get-bookmarks";
import { useCollectionModal } from "@/stores/use-collection-modal";
import { ChangeEvent, ComponentProps, useState } from "react";
import { cn } from "shadcn/lib/utils";

interface ColorSelectionProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  title?: string;
}

export function CollectionNameInput({ children, ...props }: ComponentProps<"input">) {
  return (
    <div className={cn("space-y-2", props.className)}>
      <label className="text-base font-medium text-pure-color">{props.title}</label>
      <div className="flex items-center gap-4 rounded-md border border-border-color bg-secondary-bg p-3 py-2.5">
        {children}
        <input
          {...props}
          className="w-full bg-transparent font-normal text-subtitle-color outline-none placeholder:text-subtitle-color-80"
          type="text"
          placeholder={props.placeholder || "Create Name"}
        />
      </div>
    </div>
  );
}

export function ColorSelection({ selectedColor, onColorChange, title = "Select Folder Color" }: ColorSelectionProps) {
  return (
    <div className="space-y-3">
      <h6 className="text-base font-medium text-pure-color">{title}</h6>
      <div className="flex gap-3">
        {BOOKMARK_COLORS.map(color => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={cn("flex size-7 items-center justify-center rounded-[6px] active:scale-95")}
            style={{ backgroundColor: color }}
          >
            {color === selectedColor && <TickCircleIcon className="text-primary-fg" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function CollectionType() {
  const { selectedType, setSelectedType } = useCollectionModal();

  return (
    <div className="space-y-4">
      <h6 className="text-base font-medium">Choose Folder Type</h6>
      <div className="select-none space-y-3">
        <label htmlFor="bookmark" className="flex cursor-pointer items-center gap-3">
          <RadioButton
            onChange={() => setSelectedType("bookmark")}
            id="bookmark"
            checked={selectedType === "bookmark"}
          />
          <div>
            <p className="text-base font-medium text-pure-color">Bookmark</p>
            <p className="text-subtitle text-subtitle-color">Collection contains multiple bookmarks.</p>
          </div>
        </label>
        <label htmlFor="pin" className="flex cursor-pointer items-center gap-3">
          <RadioButton onChange={() => setSelectedType("pin")} id="pin" checked={selectedType === "pin"} />
          <div>
            <p className="text-base font-medium text-pure-color">Pin</p>
            <p className="text-subtitle text-subtitle-color">Collection contains only one pin hadith</p>
          </div>
        </label>
      </div>
    </div>
  );
}

export function CreateCollection() {
  const { selectedType, setBookmarks, selectedColor, setSelectedColor, setIsCreateCollection } = useCollectionModal();
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleCreate = () => {
    const data = { name: inputValue, color: selectedColor };
    const updates = bookmarkStorage.create(data);
    setBookmarks(updates || []);
    setIsCreateCollection(false);
  };

  return (
    <div>
      <div className="space-y-6 px-[--padding-x] pb-6">
        {selectedType === "bookmark" && (
          <CollectionNameInput onChange={handleInput} title="Create Folder Name">
            <FolderIcon color={selectedColor} className="size-8" />
          </CollectionNameInput>
        )}
        {selectedType === "pin" && (
          <CollectionNameInput onChange={handleInput} title="Create Pin Name">
            <PinIconAngularFill color={selectedColor} className="size-8" />
          </CollectionNameInput>
        )}
        <ColorSelection selectedColor={selectedColor} onColorChange={color => setSelectedColor(color)} />
        <CollectionType />
      </div>

      <div className="flex w-full items-center max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3">
        <ModalButton onClick={() => setIsCreateCollection(false)} className="bg-secondary-bg max-tablet:rounded-md">
          Cancel
        </ModalButton>
        <ModalButton onClick={handleCreate} className="max-tablet:rounded-md">
          Create
        </ModalButton>
      </div>
    </div>
  );
}
