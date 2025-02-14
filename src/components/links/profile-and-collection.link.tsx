import { Link } from "@/navigation";

interface BookmarkFoldersLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function BookmarkFoldersLink(props: BookmarkFoldersLinkProps) {
  return <Link {...props} href="/profile/bookmarks" />;
}

interface BookmarkItemsLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  bookmarkItemId: string;
}

export function BookmarkItemsLink({ bookmarkItemId, ...props }: BookmarkItemsLinkProps) {
  return <Link {...props} href={`/profile/bookmarks/${bookmarkItemId}`} />;
}

interface PinItemsLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function PinItemsLink(props: PinItemsLinkProps) {
  return <Link {...props} href="/profile/pins" />;
}

interface LastReadItemsLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function LastReadItemsLink(props: LastReadItemsLinkProps) {
  return <Link {...props} href="/profile/last-read" />;
}
