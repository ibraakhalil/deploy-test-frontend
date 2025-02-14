import {
  DeveloperIcon,
  DropDownArrowIcon,
  FeedbackIcon,
  GotoIcon,
  GridMenuIcon,
  HelpIcon,
  HomeIcon,
  MoreGridIcon,
  PrivacyIcon2,
  VideoPlayIcon,
} from "@/components/svg";
import { cn } from "@/shadcn/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

interface MenuItemProps extends React.ComponentProps<"div"> {
  icon: React.ReactNode;
  label: string;
}

function MenuItem({ icon, label, className }: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex h-10 cursor-pointer items-center gap-3 rounded-sm px-4 py-2 text-subtitle-color-secondary hover:bg-secondary-bg [&>svg]:size-5 [&>svg]:text-subtitle-color",
        className
      )}
    >
      {icon}
      <span className="text-base">{label}</span>
    </div>
  );
}

function MoreMenu() {
  return (
    <div className="rounded-sm hover:bg-secondary-bg">
      <Accordion type="single" collapsible>
        <AccordionItem value="More">
          <AccordionTrigger className="flex w-full justify-between py-0 pe-3 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-primary">
            <MenuItem icon={<MoreGridIcon />} label="More" />
            <DropDownArrowIcon className="size-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2">
              <MenuItem icon={<span>🔒</span>} label="Privacy Policy" />
              <MenuItem icon={<span>ℹ️</span>} label="About Us" />
              <MenuItem icon={<span>📝</span>} label="Blogs" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function HomeSidebarMenu() {
  return (
    <div className="flex h-full flex-col bg-card-bg p-4">
      <div className="space-y-1">
        <h2 className="mb-2 border-b border-border-color px-4 py-2 text-subtitle-color">Menu</h2>
        <MenuItem icon={<HomeIcon />} label="Home" />
        <MenuItem icon={<GridMenuIcon />} label="Read Quran" />
        <MenuItem icon={<GotoIcon />} label="Go to Ayah" />
        <MenuItem icon={<VideoPlayIcon />} label="Watch Video" />
        <MoreMenu />
      </div>

      <div className="mt-6 space-y-1">
        <h2 className="mb-2 border-b border-border-color px-4 py-2 text-subtitle-color">Others</h2>
        <MenuItem icon={<DeveloperIcon />} label="Developers" />
        <MenuItem icon={<PrivacyIcon2 />} label="Privacy Policy" />
        <MenuItem icon={<FeedbackIcon />} label="Feedback" />
        <MenuItem icon={<HelpIcon />} label="Help" />
      </div>
    </div>
  );
}
