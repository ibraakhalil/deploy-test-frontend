import { DropDownArrowIcon } from "@/components/svg";
import { HTMLAttributes } from "react";
import { cn } from "shadcn/lib/utils";

interface SelectionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  title?: string;
}
interface OptionLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function OptionLabel({ label, children, ...props }: OptionLabelProps) {
  return (
    <div className={cn("space-y-2", props.className)} {...props}>
      <h3 className="text-title font-medium">{label}</h3>
      {children}
    </div>
  );
}

export function OptionTrigger({ children, ...props }: SelectionTriggerProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex min-h-[40px] w-full items-center justify-between rounded-sm bg-secondary-bg px-4 capitalize text-subtitle-color",
        props.className
      )}
    >
      {children}
      <DropDownArrowIcon className="-rotate-90 text-icon-color" />
    </button>
  );
}
