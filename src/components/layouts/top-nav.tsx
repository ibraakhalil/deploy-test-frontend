"use client";

import { SupportUsButton } from "@/components/common/buttons";
import { IconContainer } from "@/components/common/icon-container";
import { Logo } from "@/components/common/logo";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { Tooltip } from "@/components/common/tooltip";
import { LeftSidebarComponents } from "@/components/layouts/left-sidebar";
import { RightSidebarComponents } from "@/components/layouts/right-sidebar";
import { ThemeSwitcher } from "@/components/layouts/theme-switcher";
import { SearchModal } from "@/components/modals/search-modal/search-modal";
import { HamBergerMenIcon, SearchIcon, SettingsIcon } from "@/components/svg";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "shadcn/components/ui/sheet";

function TopNavRightMenu({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 tablet:gap-6">
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger asChild>
          <Tooltip content="Search">
            <IconContainer>
              <SearchIcon className="text-primary" />
            </IconContainer>
          </Tooltip>
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content className="max-w-[700px] max-tablet:max-w-full">
          <SearchModal />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
      <ThemeSwitcher />
      {children}
      <SupportUsButton className="max-laptop:hidden" />
    </div>
  );
}

export function TopNavBarWith() {
  const isLaptop = useMedia("(max-width: 1440px)", true);
  const isTablet = useMedia("(max-width: 1024px)", true);

  return (
    <div className="flex h-full w-full items-center justify-between px-4 tablet:px-6">
      <div className="flex items-center gap-2.5">
        {isTablet && (
          <Sheet>
            <SheetTrigger asChild>
              <IconContainer className="laptop:hidden">
                <HamBergerMenIcon />
              </IconContainer>
            </SheetTrigger>
            <SheetContent side="start">
              <div className="flex h-full flex-col">
                <Logo className="w-2/3 p-[--gap-start] pb-7">
                  <Logo.Icon className="size-7" />
                </Logo>
                <LeftSidebarComponents />
              </div>
            </SheetContent>
          </Sheet>
        )}
        <Logo className="max-tablet:hidden" />
        <h1 className="text-heading-6 font-bold tablet:hidden">Quran Mazid</h1>
      </div>

      <TopNavRightMenu>
        {isLaptop && (
          <Sheet>
            <SheetTrigger asChild>
              <Tooltip content="Settings">
                <IconContainer id="setting-trigger">
                  <SettingsIcon className="text-primary" />
                </IconContainer>
              </Tooltip>
            </SheetTrigger>
            <SheetContent>
              <div className="flex h-full flex-col">
                <h3 className="px-[--gap-start] py-4 text-heading-6 font-bold">Settings</h3>
                <RightSidebarComponents />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </TopNavRightMenu>
    </div>
  );
}

export function TopNavBarWithout() {
  return (
    <div className="flex h-full w-full items-center justify-between px-4 tablet:px-6">
      <Logo />
      <TopNavRightMenu />
    </div>
  );
}
