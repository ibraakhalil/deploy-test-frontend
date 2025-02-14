import { HighlightText } from "@/components/common/highlight-text";
import { truncateText } from "@/utils/truncate-text";

interface Props {
  searchText: string;
  tafsir: string;
}

export function SearchAyahTafsir({ tafsir = "", searchText }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-subtitle uppercase text-subtitle-color">Tafsir</h3>
        <p className="text-body text-pure-color" style={{ fontSize: "var(--translation-font-size)" }}>
          <HighlightText highlight={searchText} text={truncateText(tafsir, 400)} />
        </p>
      </div>
    </div>
  );
}
