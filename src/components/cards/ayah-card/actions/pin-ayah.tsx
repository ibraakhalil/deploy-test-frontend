import { ActionTrigger, ActionTriggerProps } from "@/components/cards/ayah-card/actions/action-trigger";
import { PinIconAngularFill } from "@/components/svg";
import { Tooltip } from "@/components/common/tooltip";

export function PinAyah({ label, ...props }: ActionTriggerProps) {
  const handlePinAyah = () => {
    ("");
  };

  return (
    <Tooltip content="Pin">
      <ActionTrigger label={label} onClick={handlePinAyah} hover {...props}>
        <PinIconAngularFill className="!size-[22px] text-icon-color" />
      </ActionTrigger>
    </Tooltip>
  );
}
