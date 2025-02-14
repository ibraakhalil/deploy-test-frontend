import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { OthersMenu } from "@/components/home/others-menu";
import { HadithBooksLink } from "@/components/links/hadith-books.link";
import { HomeLink } from "@/components/links/home.link";
import { JumpToModal } from "@/components/modals/jump-to-modal/jump-to-modal";
import { DropDownArrowIcon } from "@/components/svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shadcn/components/ui/dropdown-menu";
import { cn } from "@/shadcn/lib/utils";
import { BookmarkFoldersLink } from "@/components/links/profile-and-collection.link";

export function HomeNav() {
  const listStyle =
    "rounded-full px-4 py-1 text-subtitle cursor-pointer text-subtitle-color duration-150 hover:bg-primary-7 hover:text-primary desktop:text-title";

  return (
    <ul className="flex items-center gap-1 max-laptop:hidden">
      <HomeLink>
        <li className={listStyle}>Home</li>
      </HomeLink>
      <HadithBooksLink>
        <li className={listStyle}>Read Quran</li>
      </HadithBooksLink>
      <BookmarkFoldersLink>
        <li className={listStyle}>Profile</li>
      </BookmarkFoldersLink>
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger>
          <li className={listStyle}>Goto Ayah</li>
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content>
          <JumpToModal />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <li className={cn("flex items-center gap-2", listStyle)}>
            <span className="text-subtitle desktop:text-title">Projects</span>
            <DropDownArrowIcon className="text-subtitle-color" />
          </li>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <OthersMenu />
        </DropdownMenuContent>
      </DropdownMenu>
    </ul>
  );
}
