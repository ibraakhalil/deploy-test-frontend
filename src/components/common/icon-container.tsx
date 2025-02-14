import { cn } from "@/shadcn/lib/utils";
import React from "react";

interface IconContainerProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  hover?: boolean;
}

export const IconContainer = React.forwardRef<HTMLButtonElement, IconContainerProps>(
  ({ children, hover, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        aria-label="icon"
        className={cn(
          "group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-primary-7 text-icon-color active:scale-90 [&>svg]:size-[18px]",
          { "bg-transparent hover:bg-primary-7": hover },
          props.className
        )}
      >
        {children}
      </button>
    );
  }
);

IconContainer.displayName = "IconContainer";
