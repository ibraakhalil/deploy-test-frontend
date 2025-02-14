import { Link } from "@/navigation";

interface HadithBooksLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function HadithBooksLink(props: HadithBooksLinkProps) {
  return <Link {...props} href="/books" />;
}

interface HadithBookChapterListLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  bookName: string;
}

export function HadithBookChapterListLink({ bookName, ...props }: HadithBookChapterListLinkProps) {
  return <Link {...props} href={`/books/${bookName}`} />;
}

interface HadithBookChapterLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  bookName: string;
  chapterSlug: string;
}

export function HadithBookChapterLink({ bookName, chapterSlug, ...props }: HadithBookChapterLinkProps) {
  return <Link {...props} href={`/books/${bookName}/${chapterSlug}`} />;
}

interface HadithBookDetailsLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  bookName: string;
}

export function HadithBookDetailsLink({ bookName, ...props }: HadithBookDetailsLinkProps) {
  return <Link {...props} href={`/books/${bookName}/details`} />;
}
