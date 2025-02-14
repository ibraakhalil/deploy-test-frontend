import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { LinkIcon } from "@/components/svg";

export function ShareLink({ label, ...props }: ActionTriggerProps) {
  return (
    <ActionTrigger label={label} hover {...props}>
      <LinkIcon />
    </ActionTrigger>
  );
}
