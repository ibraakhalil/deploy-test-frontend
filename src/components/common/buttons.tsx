import { LoveIcon } from "@/components/svg";
import { ComponentProps } from "react";
import { cn } from "shadcn/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {}

export function ModalButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "h-[46px] w-full select-none overflow-auto bg-primary px-2 font-medium capitalize text-primary-fg duration-100 disabled:cursor-not-allowed",
        className,
        "[&.bg-secondary-bg]:text-pure-color"
      )}
    >
      {children}
    </button>
  );
}

export function SupportUsButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "flex h-[38px] min-w-[136px] select-none items-center justify-center gap-2 rounded-full bg-primary px-2 text-primary-fg",
        className
      )}
    >
      <span className="text-title font-medium text-primary-fg">Support Us</span>
      <LoveIcon />
    </button>
  );
}
