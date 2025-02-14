import { NavLayout } from "@/components/layouts/nav-layout";
import { SideBarLayout } from "@/components/layouts/sidebar-layout";
import { TopNavBarWith } from "@/components/layouts/top-nav";
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
        <TopNavBarWith />
      </TopNavBarLayout>
      <SideBarLayout>{children}</SideBarLayout>
    </NavLayout>
  );
}
