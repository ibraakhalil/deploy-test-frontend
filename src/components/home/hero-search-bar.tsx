import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { SearchModal } from "@/components/modals/search-modal/search-modal";
import { SearchIcon } from "@/components/svg";
import { cn } from "@/shadcn/lib/utils";
import { useEffect } from "react";

interface HeroSearchBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HeroSearchBar({ ...props }: HeroSearchBarProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        document.getElementById("search-trigger")?.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ResponsiveDialog>
      <ResponsiveDialog.Trigger asChild>
        <button
          id="search-trigger"
          aria-label="Open search"
          className={cn(
            "flex w-[320px] items-center gap-3 rounded-full border border-primary-20 bg-primary-7 px-3 py-2 tablet:w-[490px] tablet:py-2.5 desktop:w-[570px] desktop:py-3",
            props.className
          )}
        >
          <SearchIcon className="h-6 w-6 text-subtitle-color" aria-hidden="true" />
          <span className="w-full text-left text-subtitle text-subtitle-color tablet:text-title">
            What do you want to read?
          </span>
          <span className="flex h-[26px] w-[60px] items-center justify-center rounded-full bg-icon-color-10 px-3 text-subtitle text-subtitle-color">
            Ctrl+k
          </span>
        </button>
      </ResponsiveDialog.Trigger>
      <ResponsiveDialog.Content className="max-w-[700px] max-tablet:max-w-full">
        <h2 id="search-dialog-title" className="sr-only">
          Search
        </h2>
        <SearchModal aria-labelledby="search-dialog-title" />
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
