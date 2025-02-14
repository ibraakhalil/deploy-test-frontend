import { DataNotFoundIcon } from "@/components/svg";
import { cn } from "@/shadcn/lib/utils";
import React from "react";

interface NotFoundProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  large?: boolean;
}

interface SearchNotFoundProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  searchText?: React.ReactNode;
}

export function NotFound({ message = "No data found", large = false, ...props }: NotFoundProps) {
  const iconSize = large ? "size-[98px] desktop:size-[108px]" : "size-[72px]";
  const textSize = large ? "text-body" : "text-base";

  return (
    <div className={cn("flex flex-col items-center", large ? "gap-8" : "gap-4", props.className)}>
      <DataNotFoundIcon className={iconSize} />
      <h3 className={cn("font-medium !text-subtitle-color-secondary", textSize)}>{message}</h3>
    </div>
  );
}

export const SearchNotFound = React.memo(({ message = "No results found", searchText }: SearchNotFoundProps) => {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center gap-8">
      <DataNotFoundIcon className="size-[108px] text-icon-color desktop:size-[128px]" />
      <div className="max-w-[450px] space-y-2 text-center">
        <h3 className="text-heading-6 font-semibold text-pure-color desktop:text-heading-5">{message}</h3>
        <p className="text-base text-subtitle-color-secondary">
          We couldn&apos;t find anything for <span className="font-bold">“{searchText}”</span>. Please try again and try
          something else.
        </p>
      </div>
    </div>
  );
});

NotFound.displayName = "NotFound";
SearchNotFound.displayName = "SearchNotFound";
