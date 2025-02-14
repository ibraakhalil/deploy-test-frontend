import { IconContainer } from "@/components/common/icon-container";
import { CopyIcon, ShareIcon } from "@/components/svg";

export function DetailsActionBar() {
  return (
    <div className="flex items-center gap-6">
      <IconContainer>
        <CopyIcon className="text-icon-color" />
      </IconContainer>
      <IconContainer>
        <ShareIcon className="text-icon-color" />
      </IconContainer>
    </div>
  );
}
