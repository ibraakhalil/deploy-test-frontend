"use client";

import { usePathname } from "@/navigation";
import { useAudioSettings } from "@/stores/use-audio-settings";
import { useNavStore } from "@/stores/use-nav";
import { cn } from "shadcn/lib/utils";
import { AudioBar } from "../common/audio-bar/audio-bar";

export interface BottomBarLayoutProps extends React.ComponentProps<"div"> {}

export function BottomBarLayout({ className, ...props }: BottomBarLayoutProps) {
  const showAudioBar = useAudioSettings(s => s.showAudioBar);
  const { isNavVisible } = useNavStore();
  const path = usePathname();
  const isHomepage = path === "/";

  if (!showAudioBar) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 end-[var(--removed-body-scroll-bar-size,0px)] isolate z-[3] h-[--_bottom-bar-size] w-[--full] translate-y-0 bg-secondary-bg transition-transform duration-300 ease-in-out [--full:calc(100%-var(--removed-body-scroll-bar-size,0px))] laptop:w-[calc(var(--full)-var(--\\_side-nav-size))]",
        { "max-laptop:-translate-y-[--side-nav-size]": isNavVisible },
        { "end-0 laptop:w-full": isHomepage },
        className
      )}
      {...props}
    >
      <AudioBar />
    </div>
  );
}
