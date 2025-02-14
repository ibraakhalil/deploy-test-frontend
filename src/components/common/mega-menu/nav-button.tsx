import { forwardRef } from "react";
import { cn } from "shadcn/lib/utils";

interface NavButtonProps extends React.ComponentProps<"button"> {
  isActive?: boolean;
}

export const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ children, isActive, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "flex size-9 items-center justify-center rounded-sm border-2 border-transparent transition-all duration-300 hover:border-icon-color-10 hover:bg-icon-color-20 [&_svg]:size-[22px] [&_svg]:text-icon-color",
          className,
          { "active border-icon-color-10 bg-icon-color-20": isActive }
        )}
      >
        {children}
      </button>
    );
  }
);

NavButton.displayName = "NavButton";
