"use client";

import { AudioModal } from "@/components/modals/audio-modal/audio-modal";
import { AudioNextIcon, CloseCrossIcon, ThreeDotIcon } from "@/components/svg";
import { PlayIcon } from "@/components/svg/audio-icons";
import { useAudioSettings } from "@/stores/use-audio-settings";
import { IconContainer } from "@/components/common/icon-container";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";

export function PlayPauseButton() {
  return (
    <IconContainer hover>
      <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
        <PlayIcon className="size-5 fill-primary-bg" />
      </div>
    </IconContainer>
  );
}

export function AudioControls() {
  const { setShowAudioBar } = useAudioSettings();

  const handleClose = () => {
    setShowAudioBar(false);
  };

  return (
    <div className="flex items-center gap-6">
      <ResponsiveDialog>
        <ResponsiveDialog.Trigger asChild>
          <IconContainer hover>
            <ThreeDotIcon />
          </IconContainer>
        </ResponsiveDialog.Trigger>
        <ResponsiveDialog.Content className="tablet:min-w-[700px]">
          <AudioModal />
        </ResponsiveDialog.Content>
      </ResponsiveDialog>
      <div className="flex items-center gap-4">
        <IconContainer hover className="rotate-180">
          <AudioNextIcon />
        </IconContainer>
        <PlayPauseButton />
        <IconContainer hover>
          <AudioNextIcon />
        </IconContainer>
      </div>
      <IconContainer onClick={handleClose} hover>
        <CloseCrossIcon />
      </IconContainer>
    </div>
  );
}
