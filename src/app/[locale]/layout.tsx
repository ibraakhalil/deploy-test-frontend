import "@/styles/custom.css";
import "@/styles/globals.css";

import { BottomBarLayout } from "@/components/layouts/bottom-bar";
import { isDev } from "@/config/env";
import { Locale, locales } from "@/config/i18n.config";
import { Provider } from "@/contexts";
import { getLocaleDirection } from "@/utils/intl/direction";
import { getClassNameByLocal as getClasses } from "@/utils/intl/style";
import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { cn } from "shadcn/lib/utils";

export const metadata: Metadata = {
  title: "Quran Mazid",
  description:
    "Quran Mazid is a free Quran application that aims to provide a simple and easy-to-use interface to read, search, and listen to the Quran.",
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

const fontInter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--ff-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);
  const dir = getLocaleDirection(locale);

  return (
    <html suppressHydrationWarning lang={locale} dir={dir}>
      <body
        className={cn(
          getClasses(locale),
          "relative bg-primary-bg text-pure-color",
          { "debug-screens": isDev },
          [fontInter.variable].join(" ")
        )}
      >
        <Provider>
          {children}
          <BottomBarLayout />
        </Provider>
      </body>
    </html>
  );
}
