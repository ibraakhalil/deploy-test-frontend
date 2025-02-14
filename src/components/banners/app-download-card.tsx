import { AppStoreIcon, PlayStoreIcon } from "@/components/svg";
import { env } from "@/config/env";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import bannerImg from "public/assets/banner/logo-with-mobile.png";
import React from "react";

export function AppDownloadBanner() {
  const t = useTranslations();

  return (
    <div className="relative flex items-center justify-between rounded-md border border-primary-7 bg-primary-10 px-4 py-3 pb-4">
      <div className="flex-1">
        <p className="mb-2 w-[60%] text-[18px] font-bold tablet:text-[16px]">
          {t.rich("download-app.title", {
            // eslint-disable-next-line react/no-unstable-nested-components
            alHadith: chunks => <span className="text-primary">{chunks}</span>,
          })}
        </p>
        <div className="mt-4 flex gap-4">
          <Link
            href={env.PLAY_STORE_URL}
            className="flex size-11 items-center justify-center rounded-sm bg-primary-7"
            target="_blank"
          >
            <PlayStoreIcon className="size-5" />
          </Link>
          <Link
            href={env.APP_STORE_URL}
            className="flex size-11 items-center justify-center rounded-sm bg-primary-7"
            target="_blank"
          >
            <AppStoreIcon className="size-5 dark:invert" />
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={bannerImg}
          alt="App Banner"
          className="absolute bottom-0 right-3 w-[120px] tablet:right-0 tablet:w-[105px]"
        />
      </div>
    </div>
  );
}
