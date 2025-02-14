import { CloseCrossIcon } from "@/components/svg";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

interface NavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export function TafsirItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group relative my-3 flex min-w-[160px] overflow-hidden border-r border-primary-10 px-3",
        className
      )}
    >
      {children}
    </div>
  );
}

TafsirItem.Button = function TafsirItemButton({ children, isActive, ...props }: NavButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "min-h-6 w-full text-nowrap text-left text-base font-medium capitalize text-subtitle-color group-hover:text-pure-color",
        props.className,
        {
          "font-semibold text-pure-color": isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

TafsirItem.Close = function TafsirItemClose(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "absolute right-0 flex h-full w-12 items-center justify-end bg-gradient-to-l from-secondary-bg via-secondary-bg to-transparent pr-1.5",
        props.className
      )}
    >
      <CloseCrossIcon className="size-4 scale-0 text-icon-color transition-all duration-200 hover:text-primary group-hover:scale-100" />
    </button>
  );
};
