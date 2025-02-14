"use client";

import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { AppStoreIcon, CloseCircleIcon, PlayStoreIcon } from "@/components/svg";
import { env } from "@/config/env";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import mobileImage from "../../../public/assets/banner/logo-with-mobile-2.png";

function BannerUI({ handleClose }: { handleClose: () => void }) {
  const t = useTranslations();

  return (
    <div className="relative w-full max-w-[640px] rounded-t-[20px] bg-card-bg px-4 py-9">
      <button className="absolute right-5 top-5" onClick={handleClose}>
        <CloseCircleIcon className="size-6 text-subtitle-color-secondary" />
      </button>
      <div className="flex flex-col items-center">
        <Image src={mobileImage} alt="download app" className="-ml-12 w-[60%] max-w-[350px]" />
        <div>
          <h2 className="text-center text-heading-5 font-bold text-pure-color">
            {t("banner.app-download-drawer.title")}
          </h2>
          <p className="mt-2 text-center text-base text-subtitle-color-secondary">
            {t("banner.app-download-drawer.description")}
          </p>
        </div>
      </div>

      <div className="mt-9">
        <h3 className="mb-4 text-center text-body font-semibold text-pure-color">
          {t("banner.app-download-drawer.download")}
        </h3>
        <div className="flex select-none items-center justify-center gap-4">
          <Link
            href={env.PLAY_STORE_URL}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border border-primary-7 bg-secondary-bg p-2 pl-3 tablet:max-w-[160px]"
            target="_blank"
          >
            <PlayStoreIcon className="size-5" />
            <div>
              <p className="text-dark text-[10px]">Download on the</p>
              <p className="text-dark text-sm font-semibold">Play Store</p>
            </div>
          </Link>
          <Link
            href={env.APP_STORE_URL}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border border-primary-7 bg-secondary-bg p-2 pl-3 tablet:max-w-[160px]"
            target="_blank"
          >
            <AppStoreIcon className="size-5 text-pure-color dark:invert" />
            <div>
              <p className="text-dark text-[10px]">Download on the</p>
              <p className="text-dark text-sm font-semibold">App Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AppDownloadDrawer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function checkLastShownTime() {
      const lastShown = localStorage.getItem("APP_DRAWER_LAST_SHOWN");
      const today = new Date().setHours(0, 0, 0, 0);

      if (!lastShown || parseInt(lastShown, 10) < today) {
        setIsVisible(true);
        localStorage.setItem("APP_DRAWER_LAST_SHOWN", today.toString());
      }
    }

    const timer = setTimeout(checkLastShownTime, 30000);
    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsVisible(false);
  }

  return (
    <ResponsiveDialog open={isVisible} onOpenChange={handleClose}>
      <ResponsiveDialog.Content>
        <BannerUI handleClose={handleClose} />
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
