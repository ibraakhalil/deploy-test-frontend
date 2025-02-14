import { Link } from "@/navigation";

interface HomeLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function HomeLink(props: HomeLinkProps) {
  return <Link {...props} href="/" />;
}
