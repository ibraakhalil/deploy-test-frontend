"use client";

import { useScrollNavVisibility } from "@/hooks/use-nav-visibility";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "shadcn/lib/utils";

export interface TopNavBarLayoutProps extends React.ComponentProps<"nav"> {}

export function TopNavBarLayout({ children, className, ...props }: TopNavBarLayoutProps) {
  const { isNavVisible } = useScrollNavVisibility();
  const { scrollProgress } = useScrollProgress();

  return (
    <nav
      className={cn(
        "fixed top-0 isolate z-[2] flex h-[--_top-nav-size] w-[--full] translate-x-0 items-center justify-center border-b border-b-border-color bg-primary-bg transition-transform duration-300 ease-linear [--full:calc(100%-var(--removed-body-scroll-bar-size,0px))] laptop:w-[calc(var(--full)-var(--\\_side-nav-size))] ltr:right-[var(--removed-body-scroll-bar-size,0px)] rtl:left-0",
        { "-translate-y-full": !isNavVisible },
        className
      )}
      {...props}
    >
      <div
        className="absolute bottom-0 left-0 h-1 translate-y-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      {children}
    </nav>
  );
}
