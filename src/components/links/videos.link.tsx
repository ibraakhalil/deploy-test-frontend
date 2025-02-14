import { Link } from "@/navigation";

interface VideosLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function VideosLink(props: VideosLinkProps) {
  return <Link {...props} href="/videos" />;
}

interface VideoCategoryLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
}

export function VideoCategoryLink({ categoryName, ...props }: VideoCategoryLinkProps) {
  return <Link {...props} href={`/videos/${categoryName}`} />;
}

interface SingleVideoLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
  videoNameSlug: string;
}

export function SingleVideoLink({ categoryName, videoNameSlug, ...props }: SingleVideoLinkProps) {
  return <Link {...props} href={`/videos/${categoryName}/${videoNameSlug}`} />;
}
