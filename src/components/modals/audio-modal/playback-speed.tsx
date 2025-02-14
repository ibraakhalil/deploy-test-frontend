import { TickIcon } from "@/components/svg";
import { ComponentProps, useState } from "react";
import { cn } from "shadcn/lib/utils";

const speedValues = ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"];

interface PlaybackItemProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  isActive?: boolean;
}

function PlaybackItem({ children, isActive, ...props }: PlaybackItemProps) {
  return (
    <div
      {...props}
      className={cn(
        "mb-1 flex cursor-pointer items-center justify-between rounded-sm px-3 py-1 text-subtitle-color hover:bg-secondary-bg",
        {
          "group bg-secondary-bg": isActive,
        }
      )}
    >
      <span className="text-base group-[.bg-secondary-bg]:text-pure-color">{children}</span>
      <TickIcon className="opacity-0 group-[.bg-secondary-bg]:opacity-100" />
    </div>
  );
}

export function PlaybackSpeed() {
  const [activeSpeed, setActiveSpeed] = useState("1");

  return (
    <div className="h-full flex-grow pb-2">
      <h3 className="py-5 text-center text-body font-bold max-tablet:hidden">Manage Playback Speed</h3>
      <div className="max-h-[280px] overflow-y-auto px-[--padding-x]">
        {speedValues.map(speed => (
          <PlaybackItem key={speed} isActive={activeSpeed === speed} onClick={() => setActiveSpeed(speed)}>
            {speed}x
          </PlaybackItem>
        ))}
      </div>
    </div>
  );
}
