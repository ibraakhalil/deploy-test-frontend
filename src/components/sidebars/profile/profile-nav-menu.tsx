"use client";

import { BookmarkFoldersLink, LastReadItemsLink, PinItemsLink } from "@/components/links/profile-and-collection.link";
import {
  BookmarkIcon,
  BookmarkIconFill2,
  ExitIcon,
  PinIconVertical,
  PinIconVerticalFill,
  TimerIcon,
  TimerIconFill,
} from "@/components/svg";
import { usePathname } from "@/navigation";
import { ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

function ProfileMenuItem({ children, label, path }: { children: ReactNode; label: string; path?: string }) {
  const pathName = usePathname();
  const isActive = path && pathName.includes(path);

  return (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-sm p-3 text-base text-subtitle-color-secondary hover:bg-secondary-bg tablet:text-body",
        { "bg-secondary-bg": isActive }
      )}
    >
      {children}
      <span
        className={cn("group-hover:font-semibold group-hover:text-pure-color", {
          "font-semibold text-pure-color": isActive,
        })}
      >
        {label}
      </span>
    </div>
  );
}

export function ProfileNavigationMenu() {
  return (
    <div>
      <BookmarkFoldersLink>
        <ProfileMenuItem label="Bookmarks" path="bookmarks">
          <BookmarkIcon className="size-5 group-hover:hidden" />
          <BookmarkIconFill2 className="hidden size-5 group-hover:block" />
        </ProfileMenuItem>
      </BookmarkFoldersLink>

      <PinItemsLink>
        <ProfileMenuItem label="Pins" path="pins">
          <PinIconVerticalFill className="hidden size-5 group-hover:block" />
          <PinIconVertical className="size-5 group-hover:hidden" />
        </ProfileMenuItem>
      </PinItemsLink>

      <LastReadItemsLink>
        <ProfileMenuItem label="Last Read" path="last-read">
          <TimerIconFill className="hidden size-5 group-hover:block" />
          <TimerIcon className="size-5 group-hover:hidden" />
        </ProfileMenuItem>
      </LastReadItemsLink>

      <ProfileMenuItem label="Log Out">
        <ExitIcon className="size-5 -rotate-90" />
      </ProfileMenuItem>
    </div>
  );
}
