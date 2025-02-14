import { Link } from "@/navigation";

interface BlogsLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function BlogsLink(props: BlogsLinkProps) {
  return <Link {...props} href="/blogs" />;
}

interface BlogCategoryLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
}

export function BlogCategoryLink({ categoryName, ...props }: BlogCategoryLinkProps) {
  return <Link {...props} href={`/blogs/${categoryName}`} />;
}

interface SingleBlogLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
  blogNameSlug: string;
}

export function SingleBlogLink({ categoryName, ...props }: SingleBlogLinkProps) {
  return <Link {...props} href={`/blogs/${categoryName}/${props.blogNameSlug}`} />;
}
