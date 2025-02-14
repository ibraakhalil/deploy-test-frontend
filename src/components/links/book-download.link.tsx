import { Link } from "@/navigation";

interface BookDownloadCategoryLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
}

export function BookDownloadCategoryLink(props: BookDownloadCategoryLinkProps) {
  return <Link {...props} href={`/books/${props.categoryName}`} />;
}

interface BookDownloadSingleBookLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
  bookNameSlug: string;
}

export function BookDownloadSingleBookLink({ categoryName, bookNameSlug, ...props }: BookDownloadSingleBookLinkProps) {
  return <Link {...props} href={`/books/${categoryName}/${bookNameSlug}`} />;
}
