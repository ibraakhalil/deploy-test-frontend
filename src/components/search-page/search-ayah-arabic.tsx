import { HighlightText } from "@/components/common/highlight-text";

export function SearchAyahArabic({ text, searchText }: { text: string; searchText: string }) {
  return (
    <div
      dir="rtl"
      className="font-arabic mb-4 text-right text-2xl leading-loose"
      style={{
        fontSize: "var(--arabic-font-size)",
        lineHeight: "var(--arabic-line-height)",
        fontFamily: "kfgq",
      }}
    >
      <HighlightText highlight={searchText} text={text} partial />
    </div>
  );
}
