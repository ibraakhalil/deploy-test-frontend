import { AudioControls } from "@/components/common/audio-bar/audio-controlls";
import { AudioProgress } from "@/components/common/audio-bar/audio-progress";

function AudioTitle() {
  return (
    <div className="flex items-center gap-5">
      <span className="text-subtitle text-icon-color">00:02</span>
      <p className="text-base font-semibold max-tablet:hidden">Al-Faitha : 1</p>
    </div>
  );
}

function AudioDuration({ duration }: { duration: string }) {
  return <span className="text-subtitle text-icon-color">{duration}</span>;
}

export function AudioBar() {
  return (
    <div className="relative flex h-full w-full items-center justify-between px-3">
      <AudioProgress />
      <div className="flex w-full items-center justify-between">
        <AudioTitle />
        <AudioControls />
        <AudioDuration duration="04:02" />
      </div>
    </div>
  );
}
