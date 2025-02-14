import { CheckBox } from "@/components/common/check-box";
import { SearchInput } from "@/components/common/search-input";
import { FolderIcon } from "@/components/svg";
import { useActionBar } from "@/contexts/actions-provider";
import { useCollectionModal } from "@/stores/use-collection-modal";
import { useEffect } from "react";

interface BookmarkContentProps {
  selectedOptions: Set<string>;
  setSelectedOptions: (selectedOptions: Set<string>) => void;
}

export function BookmarkContent({ selectedOptions, setSelectedOptions }: BookmarkContentProps) {
  const { bookmarks } = useCollectionModal();
  const { verseKey } = useActionBar();

  useEffect(() => {
    const filtereds = bookmarks.filter(f => f.items.includes(verseKey));
    setSelectedOptions(new Set(filtereds.map(f => f.id)));
  }, [verseKey, bookmarks, setSelectedOptions]);

  const handleSelection = (optionId: string) => {
    const newSet = new Set(selectedOptions);
    if (newSet.has(optionId)) {
      newSet.delete(optionId);
    } else {
      newSet.add(optionId);
    }
    setSelectedOptions(newSet);
  };

  return (
    <div className="space-y-3">
      <div className="px-[--padding-x]">
        <SearchInput onChange={() => ""} className="rounded-sm" placeholder="Search Bookmark Folder " />
      </div>
      <div className="relative h-[--height] overflow-y-auto px-[--padding-x]">
        {bookmarks &&
          bookmarks.map(folder => (
            <label
              key={folder.name}
              htmlFor={folder.id}
              className="flex cursor-pointer select-none items-center gap-4 py-2.5"
            >
              <CheckBox
                id={folder.id}
                checked={selectedOptions.has(folder.id)}
                onChange={() => handleSelection(folder.id)}
              />
              <div className="flex items-center gap-2.5">
                <FolderIcon className="size-7" color={folder.color} />
                <span className="mt-0.5 text-base text-pure-color">{folder.name}</span>
              </div>
            </label>
          ))}
      </div>
    </div>
  );
}
