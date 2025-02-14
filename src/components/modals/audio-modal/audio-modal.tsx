import { ModalButton } from "@/components/common/buttons";
import { useState } from "react";
import { AudioNavigationMenu } from "./navigation-menu";
import { PlaybackSpeed } from "./playback-speed";
import { Reciter } from "./reciter";
import { AudioRepeat } from "./repeat";

export function AudioModal() {
  const [activeNav, setActiveNav] = useState("reciter");

  const handleNavChange = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <div className="grid h-full max-tablet:pt-3 tablet:grid-cols-[240px_1fr]">
      <AudioNavigationMenu activeNav={activeNav} handleNavChange={handleNavChange} />
      <div className="flex flex-col [--padding-x:1.2rem] max-tablet:pt-3">
        <div className="min-h-[300px] flex-grow bg-card-bg">
          {activeNav === "repeat" && <AudioRepeat />}
          {activeNav === "playspeed" && <PlaybackSpeed />}
          {activeNav === "reciter" && <Reciter />}
        </div>
        <div className="flex justify-end">
          <ModalButton className="bg-secondary-bg">Cancel</ModalButton>
          <ModalButton>Save & Play</ModalButton>
        </div>
      </div>
    </div>
  );
}
