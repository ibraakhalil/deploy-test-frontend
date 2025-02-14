import React from "react";

interface HighlightTextProps {
  text: string;
  highlight?: string;
  className?: string;
  partial?: boolean;
}

export function HighlightText({ text, highlight, partial, className }: HighlightTextProps) {
  if (!highlight) return <span className={className}>{text}</span>;

  const highlightWords = partial ? highlight.toLowerCase().split(/\s+/) : [highlight.toLowerCase()];
  const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map(part => {
        const isHighlight = highlightWords.includes(part.toLowerCase());

        if (isHighlight) {
          return (
            <mark key={part} className="rounded-[2px] bg-primary pb-[1px] text-primary-fg">
              {part}
            </mark>
          );
        }
        return <span key={part}>{part}</span>;
      })}
    </span>
  );
}
