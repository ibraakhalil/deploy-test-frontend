"use client";

import { Tooltip } from "@/components/common/tooltip";
import { useSettings } from "@/stores/use-settings";
import { cn } from "shadcn/lib/utils";

interface WordInteractionProps {
  children?: React.ReactNode;
  wordMeaning: string;
}

export function WordInteraction({ children, wordMeaning }: WordInteractionProps) {
  const { isWBW } = useSettings();

  return (
    <Tooltip content={wordMeaning} disabled={isWBW}>
      <span
        className={cn("flex", {
          "cursor-pointer flex-col items-center rounded-sm px-2 py-1 hover:bg-secondary-bg": isWBW,
        })}
      >
        {children}
        {isWBW && <span style={{ fontSize: "calc(var(--arabic-font-size) * 0.6) " }}>{wordMeaning}</span>}
      </span>
    </Tooltip>
  );
}
