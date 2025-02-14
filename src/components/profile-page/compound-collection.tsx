import { IconContainer } from "@/components/common/icon-container";
import { SearchInput } from "@/components/common/search-input";
import { EnterIcon, ExitIcon, SortingIcon, ThreeDotIcon } from "@/components/svg";
import React, { cloneElement, ComponentProps, ReactElement, ReactNode } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "shadcn/components/ui/dropdown-menu";
import { cn } from "shadcn/lib/utils";

interface CollectionProps extends ComponentProps<"div"> {
  children: ReactNode;
}
interface CollectionHeaderProps extends ComponentProps<"div"> {
  children: ReactNode;
  title: string;
}
interface CollectionActionsProps extends ComponentProps<"div"> {}
interface CollectionCardWrapperProps {
  children: ReactNode;
  className?: string;
}
interface CollectionEmptyProps extends ComponentProps<"div"> {
  children: ReactElement;
  message?: string;
}

export function Collection({ children, className }: CollectionProps) {
  return <div className={className}>{children}</div>;
}

Collection.Header = function CollectionHeader({ children, title, className }: CollectionHeaderProps) {
  return (
    <div className={cn("mt-3 flex min-h-[42px] items-center justify-between px-[--padding-x]", className)}>
      <h1 className="text-heading-6 font-bold text-pure-color max-tablet:hidden">{title}</h1>
      <div className="flex items-center gap-6 text-subtitle-color-secondary max-tablet:w-full max-tablet:flex-row-reverse">
        {children}
      </div>
    </div>
  );
};

Collection.Actions = function CollectionActions({ children }: CollectionActionsProps) {
  return (
    <>
      {/* For laptop & other devices */}
      <div className="max-tablet:hidden">{children}</div>

      {/* For mobile Device */}
      <div className="tablet:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconContainer hover className="rotate-90">
              <ThreeDotIcon className="text-icon-color-20" />
            </IconContainer>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">{children}</DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

Collection.Search = function CollectionSearch({ className, ...props }: ComponentProps<"input">) {
  return <SearchInput {...props} className={cn("max-tablet:w-full", className)} />;
};

Collection.CardWrapper = function CollectionCardWrapper({ children, className }: CollectionCardWrapperProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-2 px-[--padding-x] py-3",
        "tablet:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] tablet:gap-x-3 tablet:gap-y-4 tablet:py-6",
        className
      )}
    >
      {children}
    </div>
  );
};

Collection.Empty = function CollectionEmpty({ children, message = "No data found!", className }: CollectionEmptyProps) {
  const iconClassName = "size-[88px] text-icon-color laptop:size-[98px] desktop:size-[108px]";

  return (
    <div className={cn("flex min-h-[70dvh] flex-col items-center justify-center gap-8", className)}>
      {cloneElement(children, { className: iconClassName })}
      <h3 className="text-body font-medium text-subtitle-color-secondary">{message}</h3>
    </div>
  );
};

export function ActionItems() {
  return (
    <div className="flex items-center gap-3 max-tablet:p-2">
      <IconContainer hover>
        <EnterIcon />
      </IconContainer>
      <IconContainer hover>
        <ExitIcon />
      </IconContainer>
      <IconContainer hover>
        <SortingIcon />
      </IconContainer>
    </div>
  );
}
