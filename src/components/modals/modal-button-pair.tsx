import { ModalButton } from "@/components/common/buttons";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { cn } from "shadcn/lib/utils";

interface ModalButtonPairProps {
  onApply: (selectedOptions: string[]) => void;
  applyStyle?: string;
  closeStyle?: string;
  containerStyle?: string;
  closeButtonTitle?: string;
  ApplyButtonTitle?: string;
}

export function ModalButtonPair({
  onApply,
  applyStyle,
  closeStyle,
  containerStyle,
  closeButtonTitle,
  ApplyButtonTitle,
}: ModalButtonPairProps) {
  return (
    <div className={cn("flex w-full items-center max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3", containerStyle)}>
      <ResponsiveDialog.Close className="w-full">
        <ModalButton
          className={cn("bg-secondary-bg py-2 text-subtitle-color-secondary max-tablet:rounded-md", closeStyle)}
          title={closeButtonTitle || "Cancel"}
        />
      </ResponsiveDialog.Close>
      <ModalButton
        onClick={() => onApply([])}
        title={ApplyButtonTitle || "Apply"}
        className={cn("max-tablet:rounded-md", applyStyle)}
      />
    </div>
  );
}
