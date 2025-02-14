import { NavLayout } from "@/components/layouts/nav-layout";
import { TopNavBarWithout } from "@/components/layouts/top-nav";
import { TopNavBarLayout } from "@/components/layouts/top-nav-layout";
import { Locale } from "@/config/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function Layout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <NavLayout>
      <TopNavBarLayout>
        <TopNavBarWithout />
      </TopNavBarLayout>
      <div className="mx-auto w-full overflow-hidden pb-[--bottom-bar-size] pt-[--_top-nav-size] desktop:w-[1200px]">
        {children}
      </div>
    </NavLayout>
  );
}
