import { SearchIcon } from "@/components/svg";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "shadcn/lib/utils";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-10 items-center gap-3 rounded-full border border-border-color bg-secondary-bg px-3 text-base",
        className
      )}
    >
      <SearchIcon className="text-subtitle-color" />
      <input
        ref={ref}
        type="text"
        className="w-full bg-transparent text-subtitle-color outline-none placeholder:text-subtitle-color-50"
        placeholder="Search..."
        aria-label={props.placeholder}
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = "SearchInput";
