"use client";

import { BookmarkAyah } from "@/components/cards/ayah-card/actions/bookmark-ayah";
import { CopyAyah } from "@/components/cards/ayah-card/actions/copy-ayah";
import { GotoTafsir } from "@/components/cards/ayah-card/actions/goto-tafsir";
import { PinAyah } from "@/components/cards/ayah-card/actions/pin-ayah";
import { PlayAyah } from "@/components/cards/ayah-card/actions/play-ayah";
import { ShareAyah } from "@/components/cards/ayah-card/actions/share-ayah";
import { ShareLink } from "@/components/cards/ayah-card/actions/share-link";
import { IconContainer } from "@/components/common/icon-container";
import { Tooltip } from "@/components/common/tooltip";
import { ThreeDotIcon } from "@/components/svg";
import { ActionBarProvider } from "@/contexts/actions-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "shadcn/components/ui/dropdown-menu";

type ActionType = "play" | "tafsir" | "bookmark" | "pin" | "copy" | "share" | "shareLink";

interface ActionBarProps {
  actions?: ActionType[];
  exclude?: ActionType[];
  children?: React.ReactNode;
  verseKey: string;
}

const DEFAULT_ACTIONS: ActionType[] = ["play", "tafsir", "bookmark", "pin", "copy", "share", "shareLink"];
const DROPDOWN_ACTIONS: ActionType[] = ["copy", "share", "shareLink"];

export function ActionBar({ actions = DEFAULT_ACTIONS, exclude = [], children, verseKey }: ActionBarProps) {
  const filteredActions = actions.filter(action => !exclude.includes(action));
  const hasDropdownActions = DROPDOWN_ACTIONS.some(action => filteredActions.includes(action));
  const hasAction = (actionType: ActionType): boolean => filteredActions.includes(actionType);

  const values = {
    verseKey,
  };

  return (
    <ActionBarProvider value={values}>
      <div className="flex flex-col items-center gap-1 max-tablet:hidden">
        {hasAction("play") && <PlayAyah />}
        {hasAction("tafsir") && <GotoTafsir verseKey={verseKey} />}
        {hasAction("bookmark") && <BookmarkAyah />}
        {hasAction("pin") && <PinAyah />}
        {children}

        {hasDropdownActions && (
          <DropdownMenu>
            <Tooltip content="More">
              <DropdownMenuTrigger asChild>
                <IconContainer hover>
                  <ThreeDotIcon className="text-icon-color" />
                </IconContainer>
              </DropdownMenuTrigger>
            </Tooltip>
            <DropdownMenuContent className="min-w-[200px] p-1.5">
              {hasAction("copy") && <CopyAyah label="Copy Ayah" />}
              {hasAction("share") && <ShareAyah label="Share Ayah" />}
              {hasAction("shareLink") && <ShareLink label="Share Link" />}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </ActionBarProvider>
  );
}
