import { ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

function LinkItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={cn(
        "flex h-8 w-24 items-center justify-center rounded-full bg-primary-7 text-subtitle text-subtitle-color duration-300 will-change-transform active:scale-90 tablet:h-9 tablet:w-[110px] tablet:text-base",
        className
      )}
    >
      {children}
    </button>
  );
}

export function QuickLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 max-tablet:w-[360px]">
      <LinkItem>Al-Mulk</LinkItem>
      <LinkItem>Ya-Sin</LinkItem>
      <LinkItem>Al-Kahf</LinkItem>
      <LinkItem>Al-Ikhlas</LinkItem>
      <LinkItem className="tablet:hidden">As-Sajdah</LinkItem>
    </div>
  );
}
