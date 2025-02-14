import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { MegaMenuContent } from "@/components/common/mega-menu/mega-menu-content";
import { MegaMenuIcon } from "@/components/svg";
import { NavButton } from "@/components/common/mega-menu/nav-button";
import { Tooltip } from "@/components/common/tooltip";
import { useMedia } from "react-use";

export function MegaMenu() {
  const isTablet = useMedia("(max-width:1024px)", false);
  return (
    <Popover>
      <Tooltip content="Menu" side="right">
        <PopoverTrigger asChild>
          <NavButton>
            <MegaMenuIcon />
          </NavButton>
        </PopoverTrigger>
      </Tooltip>
      <PopoverContent side={isTablet ? "top" : "right"} align={isTablet ? "center" : "end"} className="shadow-2xl">
        <MegaMenuContent />
      </PopoverContent>
    </Popover>
  );
}
