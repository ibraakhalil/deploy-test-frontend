import { CheckBox } from "@/components/common/check-box";
import { SearchInput } from "@/components/common/search-input";
import { DropDownArrowIcon } from "@/components/svg";
import { tafsirList } from "@/constants/dummy-data";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/stores/use-settings";
import { InputHTMLAttributes } from "react";

interface TranslationValue {
  name: string;
  value: string;
}
interface CheckedItemProps extends InputHTMLAttributes<HTMLInputElement> {
  tafsir: TranslationValue;
}

function CheckedItem({ tafsir, ...props }: CheckedItemProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 px-2" key={tafsir.name} htmlFor={tafsir.value}>
      <CheckBox id={tafsir.value} ariaLabel={tafsir.name} {...props} />
      {tafsir.name}
    </label>
  );
}

export function Tafsirs() {
  const { setActiveState, setTafsirs, tafsirs } = useSettings();
  const { results, searchTerm, setSearchTerm } = useSearch(tafsirList, {
    keys: ["name"],
  });

  const handleTafsir = (value: string) => {
    if (tafsirs.includes(value)) {
      if (tafsirs.length === 1) return;
      setTafsirs(tafsirs.filter(item => item !== value));
    } else {
      setTafsirs([...tafsirs, value]);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <div className="space-y-4 pe-[--gap-end] ps-[--gap-start]">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveState("tab")}
            className="flex items-center gap-3 text-body font-semibold text-primary"
          >
            <DropDownArrowIcon className="size-5 rotate-90" /> Tafsirs
          </button>
          <button onClick={() => setTafsirs(["en_kathir"])} className="flex-shrink-0 text-subtitle text-subtitle-color">
            Reset
          </button>
        </div>

        <SearchInput
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Tafsir"
          className="flex-grow rounded-sm"
        />
      </div>

      <div className="relative space-y-4 overflow-auto pe-[--gap-end] ps-[--gap-start]">
        {results.map(tafsir => (
          <CheckedItem
            key={tafsir.value}
            tafsir={tafsir}
            checked={tafsirs.includes(tafsir.value)}
            onChange={() => handleTafsir(tafsir.value)}
          />
        ))}
      </div>
    </div>
  );
}
