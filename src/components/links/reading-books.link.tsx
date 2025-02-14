import { Link } from "@/navigation";

interface ReadingBookCategoryLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
}

export function ReadingBookCategoryLink({ categoryName, ...props }: ReadingBookCategoryLinkProps) {
  return <Link {...props} href={`/read-books/${categoryName}`} />;
}

interface ReadingBookSingleBookLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
  bookNameSlug: string;
}

export function ReadingBookSingleBookLink({ categoryName, bookNameSlug, ...props }: ReadingBookSingleBookLinkProps) {
  return <Link {...props} href={`/read-books/${categoryName}/${bookNameSlug}`} />;
}
