import { ComponentProps } from "react";
import { cn } from "shadcn/lib/utils";

interface SidebarTitleProps extends ComponentProps<"div"> {
  title: string;
}

export function SidebarTitle({ title, className, ...props }: SidebarTitleProps) {
  return (
    <h3
      {...props}
      className={cn(
        "flex h-10 items-center justify-center rounded-full border-4 border-secondary-bg bg-primary-bg text-base font-semibold text-pure-color",
        className
      )}
    >
      {title}
    </h3>
  );
}
