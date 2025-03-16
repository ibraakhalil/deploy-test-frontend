"use client";

import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { Tooltip } from "@/components/common/tooltip";
import { BookOpenIcon } from "@/components/svg";
import { Link } from "@/navigation";

export function GotoTafsir({ label, verseKey, ...props }: ActionTriggerProps & { verseKey: string }) {
  return (
    <Tooltip content="Tafsir">
      <Link href={`${verseKey}/tafsirs`}>
        <ActionTrigger label={label} {...props} hover>
          <BookOpenIcon className="text-icon-color" />
        </ActionTrigger>
      </Link>
    </Tooltip>
  );
}
