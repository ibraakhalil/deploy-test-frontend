import { Link } from "@/navigation";

interface SubjectwiseHadithLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function SubjectwiseHadithLink(props: SubjectwiseHadithLinkProps) {
  return <Link {...props} href="/subjectwise" />;
}

interface SubjectwiseHadithCategoryItemLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
}

export function SubjectwiseHadithCategoryItemLink({ categoryName, ...props }: SubjectwiseHadithCategoryItemLinkProps) {
  return <Link {...props} href={`/subjectwise/${categoryName}`} />;
}

interface SubjectwiseHadithSubCategoryItemLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  categoryName: string;
  subCategorySlug: string;
}

export function SubjectwiseHadithSubCategoryItemLink({
  categoryName,
  subCategorySlug,
  ...props
}: SubjectwiseHadithSubCategoryItemLinkProps) {
  return <Link {...props} href={`/subjectwise/${categoryName}/${subCategorySlug}`} />;
}
