import { HighlightText } from "@/components/common/highlight-text";
import { useSearchModal } from "@/stores/use-search-modal";
import { cn } from "shadcn/lib/utils";

const arabicText =
  "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَالْحَجِّ وَصَوْمِ رَمَضَانَ";

export function SearchHighlightedText({ className }: { className?: string }) {
  const searchType = useSearchModal(state => state.searchType);

  return (
    <div className={cn("flex h-full items-center pe-[--padding-x]", className)}>
      {searchType === "exact" && (
        <div className="flex h-full flex-col justify-center gap-5">
          <HighlightText className="text-xl leading-10" text={arabicText} highlight="شَهَادَةِ أَنْ لاَ إِلَهَ" />
        </div>
      )}
      {searchType === "partial" && (
        <div className="flex h-full flex-col justify-center gap-5">
          <HighlightText
            className="text-xl leading-10"
            text={arabicText}
            highlight="شَهَادَةِ وَصَوْمِ إِلَهَ"
            partial
          />
        </div>
      )}
    </div>
  );
}
