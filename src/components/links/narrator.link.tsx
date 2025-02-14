import { Link } from "@/navigation";

interface NarratorInfoLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  narratorName: string;
}

export function NarratorInfoLink({ narratorName, ...props }: NarratorInfoLinkProps) {
  return <Link {...props} href={`/narrator/${narratorName}/details`} />;
}

interface HadithByNarratorLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  narratorName: string;
}

export function HadithByNarratorLink({ narratorName, ...props }: HadithByNarratorLinkProps) {
  return <Link {...props} href={`/narrator/${narratorName}`} />;
}
