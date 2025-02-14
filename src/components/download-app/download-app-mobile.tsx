"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import alHadithAppMobileLight from "public/assets/project/download-app/al-hadith-app-mobile-light.png";
import { cn } from "shadcn/lib/utils";

export interface DownloadAppMobileProps extends React.ComponentProps<"div"> {}

export function DownloadAppMobile(props: DownloadAppMobileProps) {
  const { resolvedTheme } = useTheme();
  const t = useTranslations("download-app");
  return (
    <div {...props} className={cn("relative mx-4 mb-14 rounded-md bg-primary-10 p-4", props.className)}>
      <div className="w-3/5">
        <p className="mb-4 text-body font-bold capitalize text-pure-color">
          {t.rich("title", {
            // eslint-disable-next-line react/no-unstable-nested-components
            alHadith: chunks => <span className="text-primary">{chunks}</span>,
          })}
        </p>
        <button data-lang="en" className="rounded-full bg-primary px-3 py-1.5 text-subtitle text-primary-fg">
          Download Now
        </button>
      </div>
      <figure className="absolute -bottom-4 -right-1">
        <Image
          src={resolvedTheme === "dark" ? alHadithAppMobileLight : alHadithAppMobileLight}
          alt="hadith-app"
          width={160}
          height={146}
        />
      </figure>
    </div>
  );
}
