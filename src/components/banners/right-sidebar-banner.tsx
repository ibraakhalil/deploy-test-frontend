import { Logo } from "@/components/common/logo";
import { AppStoreIcon, PlayStoreIcon } from "@/components/svg";
import { env } from "@/config/env";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import banner_mockup from "public/assets/banner/right-side-banner-mockup.png";
import { cn } from "shadcn/lib/utils";

const featuresList = ["Bookmark", "Jump To Ayah", "Theme", "Advanced Search"];

export function RightSideBanner({ className }: { className?: string }) {
  const t = useTranslations();

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 pe-[--gap-end] ps-[--gap-start]", className)}>
      <Logo />
      <Image src={banner_mockup} alt="banner_mockup" className="max-tablet:w-[80%]" />
      <div className="rounded-md border border-primary-7 bg-secondary-bg p-3">
        <h3 className="mb-2.5 text-center text-body font-semibold text-pure-color">{t("banner.important-feature")}</h3>
        <ul className="flex flex-wrap justify-center gap-y-2 [&>li]:mx-4 [&>li]:text-center [&>li]:text-base [&>li]:text-subtitle-color [&>li]:before:-left-3">
          {featuresList.map(feature => (
            <li
              key={feature}
              className="relative text-subtitle-color-secondary before:absolute before:top-[40%] before:size-[5px] before:rounded-full before:bg-subtitle-color-50 before:content-['']"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="mb-4 text-center text-body font-semibold text-pure-color">{t("banner.download-app")}</h3>
        <div className="flex select-none items-center gap-2.5">
          <Link
            href={env.NEXT_PUBLIC_PLAY_STORE_URL}
            className="flex min-w-[142px] cursor-pointer items-center gap-2.5 rounded-sm border border-primary-7 bg-secondary-bg p-2"
            target="_blank"
          >
            <PlayStoreIcon className="size-5" />
            <div>
              <p className="text-dark text-[10px]">Download on the</p>
              <p className="text-dark text-sm font-semibold">Play Store</p>
            </div>
          </Link>
          <Link
            href={env.NEXT_PUBLIC_APP_STORE_URL}
            className="flex min-w-[142px] cursor-pointer items-center gap-2.5 rounded-sm border border-primary-7 bg-secondary-bg p-2"
            target="_blank"
          >
            <AppStoreIcon className="size-5 text-pure-color" />
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
