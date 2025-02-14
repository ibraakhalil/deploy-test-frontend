import { useAudioSettings } from "@/stores/use-audio-settings";
import { ActionTrigger } from "@/components/cards/ayah-card/actions/action-trigger";
import { PlayIcon } from "@/components/svg/audio-icons";
import { Tooltip } from "@/components/common/tooltip";

export function PlayAyah({ label }: { label?: string }) {
  const { setShowAudioBar } = useAudioSettings();
  const handlePlay = () => {
    setShowAudioBar(true);
  };

  return (
    <Tooltip content="Play">
      <ActionTrigger onClick={handlePlay} label={label} hover>
        <PlayIcon className="text-icon-color" />
      </ActionTrigger>
    </Tooltip>
  );
}
