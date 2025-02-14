import { Link } from "@/navigation";

interface TahakikPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function ThakikPageLink(props: TahakikPageLinkProps) {
  return <Link {...props} href="/tahakik" />;
}
