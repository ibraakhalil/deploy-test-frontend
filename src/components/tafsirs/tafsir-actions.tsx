"use client";

import { cn } from "shadcn/lib/utils";
import { IconContainer } from "@/components/common/icon-container";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { ShareModal } from "@/components/modals/share-modal";
import { CopyIcon, ShareIcon } from "@/components/svg";
import { Tooltip } from "@/components/common/tooltip";

interface TafsirAcionsProps {
  className?: string;
}

interface DrawerItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

function DrawerItem({ children, ...props }: DrawerItemProps) {
  return (
    <li {...props} className="flex w-full cursor-pointer items-center gap-4 px-5 py-3 hover:bg-secondary-bg">
      {children}
    </li>
  );
}

export function TafsirAcions({ className }: TafsirAcionsProps) {
  const handleCopy = () => {};

  return (
    <div className={cn(className)}>
      <div className="hidden items-center gap-5 tablet:flex">
        <Tooltip content="Copy Tafsir">
          <IconContainer hover>
            <CopyIcon />
          </IconContainer>
        </Tooltip>
        <ResponsiveDialog>
          <ResponsiveDialog.Trigger asChild>
            <Tooltip content="Share Tafsir">
              <IconContainer hover>
                <ShareIcon />
              </IconContainer>
            </Tooltip>
          </ResponsiveDialog.Trigger>
          <ResponsiveDialog.Content>
            <ShareModal />
          </ResponsiveDialog.Content>
        </ResponsiveDialog>
      </div>

      <ul className="block py-3 tablet:hidden">
        <DrawerItem onClick={handleCopy}>
          <CopyIcon className="text-icon-color" />
          <span className="text-base text-subtitle-color">Copy Tafsir</span>
        </DrawerItem>
        <ResponsiveDialog>
          <ResponsiveDialog.Trigger asChild>
            <DrawerItem>
              <ShareIcon className="text-icon-color" />
              <span className="text-base text-subtitle-color">Share Tafsir</span>
            </DrawerItem>
          </ResponsiveDialog.Trigger>
          <ResponsiveDialog.Content>
            <ShareModal />
          </ResponsiveDialog.Content>
        </ResponsiveDialog>
      </ul>
    </div>
  );
}
