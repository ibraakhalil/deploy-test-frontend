import { MegaMenuNavItem } from "@/components/common/mega-menu/mega-menu-content";
import { HadithByNarratorLink } from "@/components/links/narrator.link";
import {
  AboutUsPageLink,
  ContactUsPageLink,
  CreditPageLink,
  OurProjectPageLink,
  PrivacyPageLink,
} from "@/components/links/others-page.link";
import {
  BookIcon,
  ContactIcon,
  DisplayIcon,
  DownloadIcon,
  FeedbackIcon,
  InfoIcon,
  PageIcon,
  PrivacyIcon,
  UserProfileIcon,
  VideoCameraIcon,
} from "@/components/svg";
import { DropdownMenuItem } from "shadcn/components/ui/dropdown-menu";
import { cn } from "shadcn/lib/utils";

interface OthersMenuProps extends React.ComponentProps<"div"> {}

export function OthersMenu({ className, ...props }: OthersMenuProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-x-5 p-2", className)} {...props}>
      <DropdownMenuItem className="p-0">
        <HadithByNarratorLink narratorName="aysha" className="flex-grow">
          <MegaMenuNavItem Icon={UserProfileIcon} title="Hadith By Narrator" />
        </HadithByNarratorLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <HadithByNarratorLink narratorName="aysha" className="flex-grow">
          <MegaMenuNavItem Icon={BookIcon} title="Islamic Books" />
        </HadithByNarratorLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <HadithByNarratorLink narratorName="aysha" className="flex-grow">
          <MegaMenuNavItem Icon={DownloadIcon} title="Books Download" />
        </HadithByNarratorLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <HadithByNarratorLink narratorName="aysha" className="flex-grow">
          <MegaMenuNavItem Icon={VideoCameraIcon} title="Islamic Video" />
        </HadithByNarratorLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <HadithByNarratorLink narratorName="aysha" className="flex-grow">
          <MegaMenuNavItem Icon={PageIcon} title="Islamic Blog" />
        </HadithByNarratorLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <AboutUsPageLink className="flex-grow">
          <MegaMenuNavItem Icon={InfoIcon} title="About Us" />
        </AboutUsPageLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <ContactUsPageLink className="flex-grow">
          <MegaMenuNavItem Icon={FeedbackIcon} title="Contact Us" />
        </ContactUsPageLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <CreditPageLink className="flex-grow">
          <MegaMenuNavItem Icon={ContactIcon} title="Thanks & Credits" />
        </CreditPageLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <PrivacyPageLink className="flex-grow">
          <MegaMenuNavItem Icon={PrivacyIcon} title="Privacy Policy" />
        </PrivacyPageLink>
      </DropdownMenuItem>
      <DropdownMenuItem className="p-0">
        <OurProjectPageLink className="flex-grow">
          <MegaMenuNavItem Icon={DisplayIcon} title="Our Projects" />
        </OurProjectPageLink>
      </DropdownMenuItem>
    </div>
  );
}
