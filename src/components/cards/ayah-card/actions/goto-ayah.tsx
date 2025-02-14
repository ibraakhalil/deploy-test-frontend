import { ActionTrigger } from "@/components/cards/ayah-card/actions/action-trigger";
import { GotoLInkIcon } from "@/components/svg";
import { Link } from "@/navigation";
import { ComponentProps } from "react";

interface GotoAyahProps {
  surahId: string;
  ayahId: string;
  label?: string;
  props?: ComponentProps<typeof ActionTrigger>;
}

export function GotoAyah({ surahId, ayahId, label, ...props }: GotoAyahProps) {
  return (
    <Link href={`/${surahId}/${ayahId}`}>
      <ActionTrigger label={label} hover {...props}>
        <GotoLInkIcon />
      </ActionTrigger>
    </Link>
  );
}
