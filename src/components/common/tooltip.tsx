import React, { ComponentProps } from "react";
import { useMedia } from "react-use";
import { TooltipContent, TooltipTrigger, Tooltip as Tp } from "shadcn/components/ui/tooltip";

interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  content?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, side, align, asChild = true, ...props }, ref) => {
    const isMobile = useMedia("(max-width: 1024px)", false);

    return (
      <Tp>
        <TooltipTrigger asChild={asChild} {...props}>
          {children}
        </TooltipTrigger>
        {!isMobile && content && (
          <TooltipContent ref={ref} side={side} align={align}>
            {content}
          </TooltipContent>
        )}
      </Tp>
    );
  }
);

Tooltip.displayName = "Tooltip";
