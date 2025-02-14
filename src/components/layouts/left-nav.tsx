"use client";

import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { MegaMenu } from "@/components/common/mega-menu/mega-menu";
import { HomeLink } from "@/components/links/home.link";
import { BookmarkFoldersLink } from "@/components/links/profile-and-collection.link";
import { JumpToModal } from "@/components/modals/jump-to-modal/jump-to-modal";
import { BookmarkIcon, GotoIcon, GridMenuIcon, HomeIcon, LogoIcon } from "@/components/svg";
import { Link } from "@/navigation";
import { useNavStore } from "@/stores/use-nav";
import { cn } from "shadcn/lib/utils";
import { NavButton } from "@/components/common/mega-menu/nav-button";
import { Tooltip } from "@/components/common/tooltip";
import { useState } from "react";
import useLayoutPath from "@/hooks/use-layout-path";

interface LeftNavBarLayoutProps extends React.ComponentProps<"nav"> {}
interface LeftNavBarProps extends React.ComponentProps<"div"> {}

export function LeftNavBarLayout({ className, children, ...props }: LeftNavBarLayoutProps) {
  const { isNavVisible } = useNavStore();

  return (
    <nav
      {...props}
      className={cn(
        "fixed bottom-0 isolate z-[3] h-[--_side-nav-size] w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] translate-y-0 transform-gpu bg-secondary-bg ease-linear max-laptop:transition-transform max-laptop:duration-300 laptop:top-0 laptop:h-full laptop:w-[--_side-nav-size] laptop:ltr:left-0 laptop:rtl:left-auto laptop:rtl:right-[var(--removed-body-scroll-bar-size,0px)]",
        { "max-laptop:translate-y-full": !isNavVisible },
        className
      )}
    >
      {children}
    </nav>
  );
}

export function LeftNavBar({ className, ...props }: LeftNavBarProps) {
  const [isJumpToOpen, setIsJumpToOpen] = useState(false);
  const path = useLayoutPath();

  return (
    <div
      {...props}
      className={cn("flex h-full w-full items-center max-laptop:justify-center laptop:flex-col", className)}
    >
      <HomeLink className="max-laptop:hidden laptop:py-3">
        <LogoIcon />
      </HomeLink>
      <div className="flex items-center justify-between gap-6 tablet:gap-8 laptop:h-[calc(100%_-_110px)] laptop:flex-col laptop:justify-center laptop:gap-6">
        <HomeLink className="max-laptop:hidden">
          <Tooltip content="Home" side="right">
            <NavButton>
              <HomeIcon />
            </NavButton>
          </Tooltip>
        </HomeLink>
        <Link href="/1">
          <Tooltip content="Menu" side="right">
            <NavButton isActive={path.includes("surahId")}>
              <GridMenuIcon />
            </NavButton>
          </Tooltip>
        </Link>
        <ResponsiveDialog onOpenChange={setIsJumpToOpen}>
          <ResponsiveDialog.Trigger asChild>
            <Tooltip content="Jump To Ayah" side="right">
              <NavButton isActive={isJumpToOpen}>
                <GotoIcon />
              </NavButton>
            </Tooltip>
          </ResponsiveDialog.Trigger>
          <ResponsiveDialog.Content>
            <JumpToModal />
          </ResponsiveDialog.Content>
        </ResponsiveDialog>
        <BookmarkFoldersLink>
          <Tooltip content="Bookmark" side="right">
            <NavButton isActive={path.includes("profile")}>
              <BookmarkIcon />
            </NavButton>
          </Tooltip>
        </BookmarkFoldersLink>
        <MegaMenu />
      </div>
    </div>
  );
}
