"use client";

import { SupportUsButton } from "@/components/common/buttons";
import { IconContainer } from "@/components/common/icon-container";
import { Logo } from "@/components/common/logo";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { HomeNav } from "@/components/home/home-nav";
import { ThemeSwitcher } from "@/components/layouts/theme-switcher";
import { SearchModal } from "@/components/modals/search-modal/search-modal";
import { HomeSidebarMenu } from "@/components/sidebars/home/home-sidebar";
import { SearchIcon, SettingsIcon } from "@/components/svg";
import { useScrollNavVisibility } from "@/hooks/use-nav-visibility";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "shadcn/components/ui/sheet";
import { cn } from "@/shadcn/lib/utils";
import { Tooltip } from "@/components/common/tooltip";

interface HomeHeaderProps {
  className?: string;
}

export function HomeHeader({ className }: HomeHeaderProps) {
  const { isNavVisible } = useScrollNavVisibility();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-30 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] transition-transform duration-300",
        className,
        { "shadow-sm backdrop-blur-md": isScrolled },
        { "-translate-y-16": !isNavVisible }
      )}
    >
      <div className="mx-auto flex h-[66px] max-w-[--container-width] items-center justify-end px-4 tablet:justify-between tablet:px-10 desktop:px-0">
        <Logo className="max-tablet:hidden">
          <Logo.Icon />
        </Logo>

        <HomeNav />

        <div className="flex items-center gap-4 tablet:gap-6">
          <ResponsiveDialog>
            <ResponsiveDialog.Trigger asChild>
              <IconContainer className="tablet:hidden">
                <SearchIcon className="text-primary" />
              </IconContainer>
            </ResponsiveDialog.Trigger>
            <ResponsiveDialog.Content className="max-w-[700px] max-tablet:max-w-full">
              <SearchModal />
            </ResponsiveDialog.Content>
          </ResponsiveDialog>

          <ThemeSwitcher />
          <Sheet>
            <Tooltip content="Settings">
              <SheetTrigger asChild>
                <IconContainer>
                  <SettingsIcon className="text-primary" />
                </IconContainer>
              </SheetTrigger>
            </Tooltip>
            <SheetContent>
              <div className="flex h-full flex-col [--gap-end:1rem] [--gap-start:1rem]">
                <Logo className="p-[--gap-start]">
                  <Logo.Icon className="size-6" />
                </Logo>
                <HomeSidebarMenu />
              </div>
            </SheetContent>
          </Sheet>
          <SupportUsButton className="max-tablet:hidden" />
        </div>
      </div>
    </header>
  );
}
