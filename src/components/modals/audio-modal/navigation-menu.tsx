import { LoopIcon, SettingsIcon, TimerIcon, UserIconFill } from "@/components/svg";
import { ComponentProps, useState } from "react";
import { cn } from "shadcn/lib/utils";

interface AudioNavigationMenuProps {
  activeNav: string;
  handleNavChange: (nav: string) => void;
}

interface NavigateItemProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function NavigateItem({ children, label, isActive, ...props }: NavigateItemProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex cursor-pointer items-center gap-3 p-4 hover:bg-primary-bg max-tablet:justify-center",
        {
          active: isActive,
        },
        "group [&.active]:bg-primary-fg"
      )}
    >
      {children}
      <span className="hidden text-title group-[.active]:font-medium group-[.active]:text-pure-color tablet:inline-block">
        {label}
      </span>
    </div>
  );
}

export function AudioNavigationMenu({ activeNav, handleNavChange }: AudioNavigationMenuProps) {
  const [active, setActive] = useState(activeNav);

  const handleClick = (nav: string) => {
    setActive(nav);
    if (handleNavChange) {
      handleNavChange(nav);
    }
  };

  return (
    <div className="border-b border-border-color bg-secondary-bg tablet:border-e">
      <div className="hidden items-center gap-3 border-b border-border-color p-4 text-subtitle-color tablet:flex">
        <SettingsIcon />
        <span>Audio Settings</span>
      </div>
      <div className="grid-cols-3 max-tablet:grid">
        <NavigateItem onClick={() => handleClick("repeat")} label="Repeat" isActive={active === "repeat"}>
          <LoopIcon className="size-5 text-icon-color" />
        </NavigateItem>
        <NavigateItem onClick={() => handleClick("playspeed")} label="Playback Speed" isActive={active === "playspeed"}>
          <TimerIcon className="size-5 text-icon-color" />
        </NavigateItem>
        <NavigateItem onClick={() => handleClick("reciter")} label="Reciter" isActive={active === "reciter"}>
          <UserIconFill className="size-5 text-icon-color" />
        </NavigateItem>
      </div>
    </div>
  );
}
