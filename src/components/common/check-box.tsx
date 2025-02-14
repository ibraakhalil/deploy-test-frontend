/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { EmptyCheckBoxIcon, SelectedCheckBoxIcon } from "@/components/svg";
import { cn } from "@/shadcn/lib/utils";
import React, { forwardRef } from "react";

interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  ariaLabel?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, checked, ariaLabel, id, ...props }, ref) => {
    return (
      <div className={cn("inline-flex cursor-pointer items-center", className)}>
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          checked={checked}
          aria-checked={checked}
          aria-label={ariaLabel}
          id={id}
          onKeyDown={e => {
            if (e.key === "Enter" && props.onChange) {
              e.preventDefault();
              const event = new Event("change", { bubbles: true });
              props.onChange(event as any);
            }
          }}
          {...props}
        />
        <div
          aria-hidden="true"
          className="relative flex items-center justify-center rounded transition-all duration-200 ease-in-out peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        >
          {checked ? (
            <SelectedCheckBoxIcon className="size-4 text-primary" aria-hidden="true" />
          ) : (
            <EmptyCheckBoxIcon className="size-4 text-icon-color-50" aria-hidden="true" />
          )}
        </div>
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";
