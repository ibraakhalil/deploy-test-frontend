import { PageWrapper } from "@/components/common/page-wrapper";
import { SurahList } from "@/components/item-list/surah-list";
import { env } from "@/config/env";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  const arr = new Array(604).fill(null).map((_, index) => index + 1);
  return arr.map(n => ({
    pageId: n.toString(),
  }));
}

export default async function Page({ params: { locale, pageId } }: { params: { locale: string; pageId: string } }) {
  unstable_setRequestLocale(locale);
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/wbw/by_page/${pageId}`);
  const surahs = await res.json();

  return (
    <PageWrapper>
      <SurahList surahs={surahs} />
    </PageWrapper>
  );
}
