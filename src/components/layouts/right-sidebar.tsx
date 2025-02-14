"use client";

import { RightSideBanner } from "@/components/banners/right-sidebar-banner";
import { SettingsSidebar } from "@/components/sidebars/settings-bar/settings-sidebar";
import useLayoutPath from "@/hooks/use-layout-path";
import { cn } from "shadcn/lib/utils";

export interface RightSideBarLayoutProps extends React.ComponentProps<"div"> {}

export function RightSideBarLayout({ children, className, ...props }: RightSideBarLayoutProps) {
  return (
    <div
      className={cn(
        "sticky top-[--top-nav-size] isolate z-[1] h-[calc(var(--fs)-(var(--top-nav-size)+var(--bottom-bar-size)))] origin-center transform-gpu transition-all duration-300 ease-linear max-desktop:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function RightSidebarComponents() {
  const path = useLayoutPath();

  switch (path) {
    case "/search":
    case "/surahId":
    case "/juz/juzId":
    case "/page/pageId":
    case "/surahId/tafsirs":
    case "/profile/bookmarks/bookmarkId":
      return <SettingsSidebar />;
    default:
      return <RightSideBanner className="max-desktop:mt-10" />;
  }
}
export interface RightSideBarProps extends React.ComponentProps<"div"> {}
export function RightSideBar({ className, ...props }: RightSideBarProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full border-s border-border-color pt-6",
        "[--gap-end:1.625rem] [--gap-start:2.25rem]",
        className
      )}
      {...props}
    >
      <div className="relative flex w-full flex-col overflow-y-auto">
        <RightSidebarComponents />
      </div>
    </div>
  );
}
