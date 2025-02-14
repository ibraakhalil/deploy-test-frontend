import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { HadithBooksLink } from "@/components/links/hadith-books.link";
import { HadithByNarratorLink } from "@/components/links/narrator.link";
import { BookmarkFoldersLink } from "@/components/links/profile-and-collection.link";
import { SubjectwiseHadithLink } from "@/components/links/subjectwise-hadith.link";
import { VideosLink } from "@/components/links/videos.link";
import { JumpToModal } from "@/components/modals/jump-to-modal/jump-to-modal";
import {
  BookOpenIconFill,
  CollectionFolderIcon,
  GotoIconFill,
  MegaMenuIconFill,
  UserIconFill,
  VideoPlayIconFill,
} from "@/components/svg";

interface FeatureItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

function FeatureItem({ icon: Icon, text }: FeatureItemProps) {
  return (
    <div className="flex min-w-full flex-col items-center justify-center gap-4 rounded-sm bg-secondary-bg p-3 active:scale-95 tablet:min-w-[140px] tablet:gap-[18px] tablet:p-3 laptop:p-4">
      <Icon className="size-6 text-primary tablet:size-[30px] laptop:size-9 desktop:size-[42px]" />
      <p className="text-subtitle font-medium text-subtitle-color desktop:text-base">{text}</p>
    </div>
  );
}

export function Featured() {
  return (
    <div className="grid w-full grid-cols-3 flex-wrap items-center justify-center gap-2 px-3 tablet:flex tablet:gap-4">
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger>
          <FeatureItem icon={GotoIconFill} text="Jump to" />
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content>
          <JumpToModal />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
      <SubjectwiseHadithLink>
        <FeatureItem icon={MegaMenuIconFill} text="Subjectwise" />
      </SubjectwiseHadithLink>
      <HadithBooksLink>
        <FeatureItem icon={BookOpenIconFill} text="Hadith Book" />
      </HadithBooksLink>
      <BookmarkFoldersLink>
        <FeatureItem icon={CollectionFolderIcon} text="Collections" />
      </BookmarkFoldersLink>
      <HadithByNarratorLink narratorName="abu-huraira">
        <FeatureItem icon={UserIconFill} text="Narrators" />
      </HadithByNarratorLink>
      <VideosLink>
        <FeatureItem icon={VideoPlayIconFill} text="Islamic Video" />
      </VideosLink>
    </div>
  );
}
