import { RadioButton } from "@/components/common/radio-btn";
import { useSearchModal } from "@/stores/use-search-modal";
import { cn } from "shadcn/lib/utils";

function TypeItem({ value, type, setSearchIn }: { value: string; type: string; setSearchIn: (type: string) => void }) {
  return (
    <label htmlFor={value} className="flex cursor-pointer items-center gap-3 text-subtitle-color-secondary">
      <RadioButton id={value} value={value} onChange={e => setSearchIn(e.target.value)} checked={type === value} />
      <span className={cn("capitalize", { "font-medium": type === value })}>{value} Search</span>
    </label>
  );
}

export function SelectSearchIn() {
  const { searchIn, setSearchIn } = useSearchModal();

  return (
    <div className="space-y-2">
      <h3 className="text-title font-medium">Search In</h3>
      <div className="space-y-4">
        <TypeItem value="translations" type={searchIn} setSearchIn={setSearchIn} />
        <TypeItem value="tafsir" type={searchIn} setSearchIn={setSearchIn} />
        <TypeItem value="arabic" type={searchIn} setSearchIn={setSearchIn} />
      </div>
    </div>
  );
}
