"use client";

import { BookmarkAyah } from "@/components/cards/ayah-card/actions/bookmark-ayah";
import { CopyAyah } from "@/components/cards/ayah-card/actions/copy-ayah";
import { GotoTafsir } from "@/components/cards/ayah-card/actions/goto-tafsir";
import { PinAyah } from "@/components/cards/ayah-card/actions/pin-ayah";
import { PlayAyah } from "@/components/cards/ayah-card/actions/play-ayah";
import { ShareAyah } from "@/components/cards/ayah-card/actions/share-ayah";
import { ShareLink } from "@/components/cards/ayah-card/actions/share-link";
import { IconContainer } from "@/components/common/icon-container";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { ThreeDotIcon } from "@/components/svg";

type ActionType = "play" | "tafsir" | "bookmark" | "pin" | "copy" | "share" | "shareLink";

interface ActionsDrawerProps {
  actions?: ActionType[];
  exclude?: ActionType[];
  children?: React.ReactNode;
}

const DEFAULT_ACTIONS: ActionType[] = ["play", "tafsir", "bookmark", "pin", "copy", "share", "shareLink"];

export function ActionsDrawer({ actions = DEFAULT_ACTIONS, exclude = [], children }: ActionsDrawerProps) {
  const filteredActions = actions.filter(action => !exclude.includes(action));
  const hasAction = (actionType: ActionType): boolean => filteredActions.includes(actionType);

  return (
    <ResponsiveDialog>
      <ResponsiveDialog.Trigger className="w-full" asChild>
        <IconContainer hover>
          <ThreeDotIcon className="size-5 text-icon-color" />
        </IconContainer>
      </ResponsiveDialog.Trigger>
      <ResponsiveDialog.Content className="transform-gpu">
        <div className="space-y-2 px-3 py-3 pt-6">
          {hasAction("play") && <PlayAyah label="Play Ayah" />}
          {hasAction("tafsir") && <GotoTafsir label="Go to Tafsir" verseKey="1:1" />}
          {hasAction("bookmark") && <BookmarkAyah label="Bookmark Ayah" />}
          {hasAction("pin") && <PinAyah label="Pin Ayah" />}
          {hasAction("copy") && <CopyAyah label="Copy Ayah" />}
          {hasAction("share") && <ShareAyah label="Share Ayah" />}
          {hasAction("shareLink") && <ShareLink label="Share Link" />}
          {children}
        </div>
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
