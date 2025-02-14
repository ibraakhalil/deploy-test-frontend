import { ShareIcon } from "@/components/svg";
import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { ShareModal } from "@/components/modals/share-modal";

export function ShareAyah({ label, ...props }: ActionTriggerProps) {
  return (
    <ResponsiveDialog>
      <ResponsiveDialog.Trigger className="w-full" asChild>
        <ActionTrigger label={label} hover {...props}>
          <ShareIcon />
        </ActionTrigger>
      </ResponsiveDialog.Trigger>
      <ResponsiveDialog.Content>
        <ShareModal />
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
