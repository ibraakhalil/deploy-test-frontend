import { IconContainer } from "@/components/common/icon-container";
import { RadioButton } from "@/components/common/radio-btn";
import { SearchInput } from "@/components/common/search-input";
import { LongArrowIcon, ResetIcon } from "@/components/svg";
import { tafsirList } from "@/constants/dummy-data";
import { useSearch } from "@/hooks/use-search";
import { useSearchModal } from "@/stores/use-search-modal";
import { InputHTMLAttributes } from "react";

interface CheckedItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

function CheckedItem({ label, value, ...props }: CheckedItemProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 px-2" key={label} htmlFor={value}>
      <RadioButton id={value} {...props} />
      {label}
    </label>
  );
}

export function TafsirList() {
  const { setShowOptions, selectedTafsir, setSelectedTafsir } = useSearchModal();
  const { results, searchTerm, setSearchTerm } = useSearch(tafsirList, {
    keys: ["name"],
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 max-tablet:px-[--padding-x] tablet:pe-[--padding-x]">
        <IconContainer onClick={() => setShowOptions(false)} className="flex-shrink-0 tablet:hidden">
          <LongArrowIcon className="rotate-180" />
        </IconContainer>
        <SearchInput
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Tafsir"
          className="flex-grow rounded-sm"
        />
        <IconContainer onClick={() => setSelectedTafsir("")} className="flex-shrink-0" hover>
          <ResetIcon />
        </IconContainer>
      </div>

      <div className="relative flex max-h-[300px] flex-col gap-2 overflow-auto max-tablet:px-[--padding-x] tablet:pe-[--padding-x]">
        {results.map(tafsir => (
          <div key={tafsir.value}>
            <CheckedItem
              value={tafsir.value}
              label={tafsir.name}
              checked={selectedTafsir === tafsir.value}
              onChange={() => setSelectedTafsir(tafsir.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
