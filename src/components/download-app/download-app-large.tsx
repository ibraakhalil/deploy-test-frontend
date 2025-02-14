/* eslint-disable no-nested-ternary */

"use client";

import { DownloadButtonGroup } from "@/components/download-app/download-app-button";
import { cn } from "@/shadcn/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import desk_mockup_dark from "public/assets/home/mockup-desktop-dark.png";
import desk_mockup_green from "public/assets/home/mockup-desktop-green.png";
import desk_mockup_sepia from "public/assets/home/mockup-desktop-sepia.png";
import mobile_mockup_dark from "public/assets/home/mockup_mobile_dark.png";
import mobile_mockup_green from "public/assets/home/mockup_mobile_green.png";
import mobile_mockup_sepia from "public/assets/home/mockup_mobile_sepia.png";

export function DownloadAppLarge({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      dir="ltr"
      className={cn(
        "relative mx-auto grid w-full max-w-[--container-width] grid-cols-1 items-center overflow-hidden rounded-none bg-secondary-bg p-8",
        "tablet:h-[550px] tablet:grid-cols-[500px_1fr] laptop:rounded-lg desktop:h-[650px]",
        className
      )}
    >
      <div className="flex flex-col gap-10 max-tablet:order-1 max-tablet:items-center">
        <h1 className="text-center text-heading-4 font-bold capitalize text-pure-color tablet:text-start tablet:text-heading-3 laptop:text-heading-2 desktop:text-heading-1">
          Download the Quran Mazid Mobile App
        </h1>
        <h4 className="text-center font-medium text-subtitle-color-secondary tablet:text-start tablet:text-base laptop:max-w-[450px] laptop:text-body desktop:max-w-full desktop:text-heading-6">
          If you need to download app or visit website all link is here.
        </h4>
        <DownloadButtonGroup />
      </div>

      <div className="max-tablet:mb-12 max-tablet:flex max-tablet:justify-center">
        <Image
          className="absolute bottom-0 w-[600px] max-laptop:start-[50%] max-tablet:hidden laptop:end-0 desktop:w-[750px]"
          src={
            resolvedTheme === "dark"
              ? desk_mockup_dark
              : resolvedTheme === "green"
                ? desk_mockup_green
                : desk_mockup_sepia
          }
          width={750}
          height={650}
          alt="desktop-mockup-image"
          quality={100}
        />
        <Image
          className="end-20 top-1/2 w-[160px] drop-shadow-[17px_8px_150px_rgba(130,116,104,0.20)] tablet:absolute tablet:w-[230px] tablet:-translate-y-1/2 desktop:w-[280px]"
          src={
            resolvedTheme === "dark"
              ? mobile_mockup_dark
              : resolvedTheme === "green"
                ? mobile_mockup_green
                : mobile_mockup_sepia
          }
          alt="mobile-mockup-image"
          quality={100}
        />
      </div>
    </div>
  );
}
