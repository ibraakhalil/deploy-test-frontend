"use client";

import { DropDownArrowIcon, LongArrowIcon } from "@/components/svg";
import { surahList } from "@/constants/surah-list";
import { useRouter } from "@/navigation";
import React from "react";
import { cn } from "shadcn/lib/utils";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "prev" | "next";
  label: string;
}

function NavButton({ variant = "prev", label, ...props }: NavButtonProps) {
  return (
    <button
      {...props}
      className={cn("flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-opacity-80", {
        "flex-row-reverse": variant === "next",
        "cursor-not-allowed text-subtitle-color-50": props.disabled,
      })}
      aria-label={`${label} ${variant === "prev" ? "previous" : "next"} tafsir`}
    >
      <DropDownArrowIcon
        className={cn("size-4 rotate-90", {
          "-rotate-90": variant === "next",
        })}
        aria-hidden="true"
      />
      <span className="text-base">{label}</span>
    </button>
  );
}

export function TafsirNavigationBar({ verseKey }: { verseKey: string }) {
  const router = useRouter();
  const [surahId, ayahId] = verseKey.split(":");
  const surah = surahList.find(s => s.id.toString() === surahId);
  const isPrevDisabled = parseInt(ayahId, 10) <= 1;
  const isNextDisabled = parseInt(ayahId, 10) >= (surah?.count || 0);

  const handleNavigation = (n: number) => {
    router.push(`/${surahId}:${n}/tafsirs`);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <nav
      className="flex h-16 items-center justify-between bg-secondary-bg px-[--padding-x]"
      aria-label="Tafsir navigation"
    >
      <button className="hidden items-center gap-4 tablet:flex" onClick={() => handleBack()}>
        <LongArrowIcon className="size-6 rotate-180 text-icon-color" aria-hidden="true" />
        <h3 className="text-body font-medium">
          Tafsir of {surah?.name}: {ayahId}
        </h3>
      </button>
      <div className="flex items-center gap-2 max-tablet:flex-grow max-tablet:justify-between">
        <NavButton
          label="Previous"
          disabled={isPrevDisabled}
          onClick={() => handleNavigation(parseInt(ayahId, 10) - 1)}
        />
        <div className="h-5 w-[1px] bg-border-color max-tablet:hidden" />
        <NavButton
          label="Next Ayah"
          variant="next"
          disabled={isNextDisabled}
          onClick={() => handleNavigation(parseInt(ayahId, 10) + 1)}
        />
      </div>
    </nav>
  );
}
