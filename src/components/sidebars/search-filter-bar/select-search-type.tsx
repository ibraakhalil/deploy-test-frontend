import { RadioButton } from "@/components/common/radio-btn";
import { useSearchModal } from "@/stores/use-search-modal";
import { cn } from "shadcn/lib/utils";

function TypeItem({ value, type, setType }: { value: string; type: string; setType: (type: string) => void }) {
  return (
    <label htmlFor={value} className="flex cursor-pointer items-center gap-3 text-subtitle-color-secondary">
      <RadioButton id={value} value={value} onChange={e => setType(e.target.value)} checked={type === value} />
      <span className={cn("capitalize", { "font-medium": type === value })}>{value} Match</span>
    </label>
  );
}

export function SelectSearchType() {
  const { searchType, setSearchType } = useSearchModal();

  return (
    <div className="space-y-2">
      <h3 className="text-title font-medium">Select Search Type</h3>
      <div className="space-y-4">
        <TypeItem value="exact" type={searchType} setType={setSearchType} />
        <TypeItem value="partial" type={searchType} setType={setSearchType} />
      </div>
    </div>
  );
}
