import { ComponentProps } from "react";
import { cn } from "shadcn/lib/utils";

interface PageWrapperProps extends ComponentProps<"main"> {}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={cn("pb-16 [--padding-x:15px] tablet:[--padding-x:24px] desktop:[--padding-x:36px]", className)}>
      {children}
    </main>
  );
}
