import { CopyIcon } from "@/components/svg/actions-icons";
import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";

export function CopyAyah({ label, ...props }: ActionTriggerProps) {
  return (
    <ActionTrigger label={label} hover {...props}>
      <CopyIcon />
    </ActionTrigger>
  );
}
