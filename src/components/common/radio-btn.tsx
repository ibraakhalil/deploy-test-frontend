import React, { forwardRef } from "react";
import { cn } from "shadcn/lib/utils";

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(({ className, ...props }, ref) => {
  return (
    <div className={cn("inline-flex cursor-pointer items-center", className)}>
      <input type="radio" className="sr-only" ref={ref} {...props} />
      <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.5"
          y="1"
          width="15"
          height="15"
          strokeWidth={1.5}
          rx="7.5"
          className={cn("stroke-icon-color", { "stroke-primary": props.checked })}
        />
        <rect
          x="3"
          y="3.5"
          width="10"
          height="10"
          rx="5"
          className={cn("fill-transparent", { "fill-primary": props.checked })}
        />
      </svg>
    </div>
  );
});

RadioButton.displayName = "RadioButton";
