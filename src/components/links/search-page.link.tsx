import { Link } from "@/navigation";

interface SearchPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function SearchPageLink(props: SearchPageLinkProps) {
  return <Link {...props} href="/search" />;
}
