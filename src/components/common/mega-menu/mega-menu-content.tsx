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
import { cn } from "shadcn/lib/utils";

interface MegaMenuContentProps extends React.ComponentProps<"div"> {}

interface NavItemProps extends React.ComponentProps<"div"> {
  Icon: React.FC<React.ComponentProps<"svg">>;
  title: string;
}

export function MegaMenuNavItem({ title, Icon, ...props }: NavItemProps) {
  return (
    <div
      {...props}
      className={cn("flex w-full items-center gap-4 rounded-sm px-2.5 py-3 hover:bg-primary-7", props.className)}
    >
      <Icon className="text-icon-color" />
      <p className="text-subtitle text-subtitle-color-secondary tablet:text-base">{title}</p>
    </div>
  );
}

export function MegaMenuContent({ className }: MegaMenuContentProps) {
  return (
    <div className={cn("flex flex-col p-2", className)}>
      <HadithByNarratorLink narratorName="aysha">
        <MegaMenuNavItem Icon={UserProfileIcon} title="Hadith By Narrator" />
      </HadithByNarratorLink>
      <HadithByNarratorLink narratorName="aysha">
        <MegaMenuNavItem Icon={BookIcon} title="Islamic Books" />
      </HadithByNarratorLink>
      <HadithByNarratorLink narratorName="aysha">
        <MegaMenuNavItem Icon={DownloadIcon} title="Books Download" />
      </HadithByNarratorLink>
      <HadithByNarratorLink narratorName="aysha">
        <MegaMenuNavItem Icon={VideoCameraIcon} title="Islamic Video" />
      </HadithByNarratorLink>
      <HadithByNarratorLink narratorName="aysha">
        <MegaMenuNavItem Icon={PageIcon} title="Islamic Blog" />
      </HadithByNarratorLink>
      <AboutUsPageLink>
        <MegaMenuNavItem Icon={InfoIcon} title="About Us" />
      </AboutUsPageLink>
      <ContactUsPageLink>
        <MegaMenuNavItem Icon={FeedbackIcon} title="Contact Us" />
      </ContactUsPageLink>
      <CreditPageLink>
        <MegaMenuNavItem Icon={ContactIcon} title="Thanks & Credits" />
      </CreditPageLink>
      <PrivacyPageLink>
        <MegaMenuNavItem Icon={PrivacyIcon} title="Privacy Policy" />
      </PrivacyPageLink>
      <OurProjectPageLink>
        <MegaMenuNavItem Icon={DisplayIcon} title="Our Projects" />
      </OurProjectPageLink>
    </div>
  );
}
