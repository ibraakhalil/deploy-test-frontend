"use client";

import { AyahPageSidebar } from "@/components/sidebars/ayah-page/ayah-page-sidebar";
import { BlogSidebar } from "@/components/sidebars/blog-sidebar/blog-sidebar";
import { BookmarksSidebar } from "@/components/sidebars/bookmarks/bookmarks-sidebar";
import { ProfileSidebar } from "@/components/sidebars/profile/profile-sidebar";
import { SearchFilterSidebar } from "@/components/sidebars/search-filter-bar/search-filter-sidebar";
import { VideoSidebar } from "@/components/sidebars/video-sidebar/video-sidebar";
import useLayoutPath from "@/hooks/use-layout-path";
import { cn } from "shadcn/lib/utils";

export interface LeftSideBarLayoutProps extends React.ComponentProps<"div"> {}

export function LeftSideBarLayout({ className, children, ...props }: LeftSideBarLayoutProps) {
  return (
    <div
      className={cn(
        "sticky top-[--top-nav-size] isolate z-[1] h-[calc(var(--fs)-(var(--top-nav-size)+var(--bottom-bar-size)))] overflow-x-hidden transition-all duration-300 ease-linear max-laptop:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface LeftSideBarProps extends React.ComponentProps<"div"> {}

export function LeftSidebarComponents() {
  const path = useLayoutPath();

  switch (path) {
    case "/surahId":
    case "/surahId/tafsirs":
    case "/juz/juzId":
    case "/page/pageId":
    case "/reading/surahId":
    case "/reading/juz":
    case "/reading/page":
    case "/reading/image-mushaf":
      return <AyahPageSidebar />;
    case "/profile/bookmarks":
    case "/profile/pins":
    case "/profile/last-read":
      return <ProfileSidebar />;
    case "/profile/bookmarks/bookmarkId":
      return <BookmarksSidebar />;
    case "/search":
      return <SearchFilterSidebar />;
    case "/blogs":
    case "/blogs/category":
    case "/blogs/category/blogId":
      return <BlogSidebar />;
    case "/videos":
    case "/videos/category":
    case "/videos/category/videoId":
      return <VideoSidebar />;
    default:
      return <AyahPageSidebar />;
  }
}

export function LeftSideBar({ className, ...props }: LeftSideBarProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex h-full w-full border-e border-border-color [--gap-end:2.25rem] [--gap-start:1.625rem]",
        className
      )}
    >
      <div className="flex h-full w-full flex-col overflow-y-auto pt-6">
        <LeftSidebarComponents />
      </div>
    </div>
  );
}
