"use client";

import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { Tooltip } from "@/components/common/tooltip";
import { BookOpenIcon } from "@/components/svg";
import { useRouter } from "@/navigation";

export function GotoTafsir({ label, verseKey, ...props }: ActionTriggerProps & { verseKey: string }) {
  const router = useRouter();
  const handleGoTo = () => {
    router.push(`/${verseKey}/tafsirs`);
  };

  return (
    <Tooltip content="Tafsir">
      <ActionTrigger onClick={handleGoTo} label={label} {...props} hover>
        <BookOpenIcon className="text-icon-color" />
      </ActionTrigger>
    </Tooltip>
  );
}
