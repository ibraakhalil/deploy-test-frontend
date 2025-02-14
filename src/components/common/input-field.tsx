// src/components/common/input-field.tsx

import { cn } from "@/shadcn/lib/utils";
import React, { forwardRef } from "react";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-title font-semibold text-pure-color">
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            "w-full rounded-md border border-icon-color-20 bg-secondary-bg px-3 py-[9px] text-subtitle-color outline-none transition-all duration-200 placeholder:text-subtitle-color focus:border-2 focus:border-icon-color-50",
            { "border-red-500 focus:border-red-500 focus:ring-red-500/20": error },
            className
          )}
          autoComplete="off"
        />
        {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";
