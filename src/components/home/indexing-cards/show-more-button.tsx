import { DropDownArrowIcon } from "@/components/svg";
import { useState } from "react";
import { cn } from "shadcn/lib/utils";

interface ShowMoreButtonProps extends React.ComponentProps<"button"> {}

export function ShowMoreButton({ onClick, ...props }: ShowMoreButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(!isActive);
    onClick?.(e);
  };

  return (
    <div className="flex h-[120px] w-full items-center justify-center">
      <button
        {...props}
        onClick={handleClick}
        className="flex h-11 items-center justify-between gap-4 rounded-sm border border-border-color bg-secondary-bg px-3"
      >
        <span className="font-medium text-subtitle-color">Show {isActive ? "Less" : "More"}</span>
        <DropDownArrowIcon className={cn("text-icon-color duration-200", { "rotate-180": isActive })} />
      </button>
    </div>
  );
}
