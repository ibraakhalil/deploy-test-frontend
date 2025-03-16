import { DownloadAppLarge } from "@/components/download-app/download-app-large";
import { BePartOfSadaqah } from "@/components/home/be-part";
import { Collections } from "@/components/home/collections";
import { Footer } from "@/components/home/footer/footer";
import { HomeHeader } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { QuranIndex } from "@/components/home/quran-index";
import { LeftNavBar, LeftNavBarLayout } from "@/components/layouts/left-nav";
import { Link } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="[--container-width:1280px] tablet:[--container-width:1280px] laptop:[--container-width:1320px] desktop:[--container-width:1320px]">
      <HomeHeader />
      <LeftNavBarLayout className="tablet:hidden">
        <LeftNavBar />
      </LeftNavBarLayout>
      <Hero />
      <Link href="/profile/bookmarks" className="bg-[red] p-8 text-primary-fg">
        Profile page
      </Link>
      <div className="flex flex-col gap-[50px] tablet:mt-16 tablet:gap-[80px]">
        <Collections className="max-tablet:hidden" />
        <QuranIndex />
        <DownloadAppLarge />
      </div>
      <BePartOfSadaqah />
      <Footer />
    </div>
  );
}
