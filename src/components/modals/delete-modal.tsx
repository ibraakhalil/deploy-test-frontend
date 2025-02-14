import { ModalButton } from "@/components/common/buttons";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { FileDeleteIcon } from "@/components/svg";
import { cn } from "shadcn/lib/utils";

interface DeleteModalProps extends React.ComponentProps<"div"> {
  text: string;
  onSubmit: () => void;
}

export function DeleteModal({ text, onSubmit, className, ...props }: DeleteModalProps) {
  return (
    <div {...props} className={cn(className)}>
      <div className="flex flex-col items-center justify-center gap-10 px-6 py-8">
        <FileDeleteIcon className="size-[60px]" />
        <p className="max-w-[350px] text-balance font-semibold text-pure-color">{text}</p>
      </div>
      <div className="flex w-full items-center max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3">
        <ModalButton onClick={onSubmit} className="max-tablet:rounded-md">
          Delete
        </ModalButton>
        <ResponsiveDialog.Close className="w-full" asChild>
          <ModalButton className="bg-secondary-bg max-tablet:rounded-md">Cancel</ModalButton>
        </ResponsiveDialog.Close>
      </div>
    </div>
  );
}
