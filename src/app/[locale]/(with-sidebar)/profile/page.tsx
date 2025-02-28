import { redirect } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const shouldRedirect = true;
  if (shouldRedirect) {
    redirect("/profile/bookmarks");
  }
  return null;
}
