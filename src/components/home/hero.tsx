"use client";

import { HeroSearchBar } from "@/components/home/hero-search-bar";
import { QuranIcon } from "@/components/svg";
import { cn } from "@/shadcn/lib/utils";
import { HangingLampSVG, HeroBottomShapeSvg, MosqueBgSvg } from "@/components/svg/hero-svg";
import { Slider } from "@/components/home/ayah-swiper";
import { QuickLinks } from "@/components/home/quick-links";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <div
      style={{ background: "var(--gradient-hero-primary)" }}
      className={cn(
        "relative flex h-[420px] flex-col items-center justify-center gap-[80px] overflow-hidden",
        "max-tablet:!bg-none max-tablet:py-6 tablet:h-[100dvh] tablet:min-h-[700px]",
        className
      )}
    >
      <div className="flex flex-col items-center gap-y-8 tablet:gap-y-[44px]">
        <div className="flex items-center gap-4">
          <QuranIcon className="tablet:hidden" />
          <h1 className="font-[CinzelDecorative] text-heading-5 font-bold text-pure-color tablet:text-heading-1 desktop:text-[52px]">
            Quran Mazid
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4 tablet:gap-6">
          <HeroSearchBar />
          <QuickLinks />
        </div>
      </div>
      <div className="max-w-[70vw] max-tablet:hidden">
        <Slider />
      </div>

      <MosqueBgSvg className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary max-tablet:hidden" />

      <div className="max-laptop:hidden">
        <HangingLampSVG className="absolute left-0 top-0 desktop:left-[10%]" />
        <HangingLampSVG className="absolute right-0 top-0 -scale-x-100 desktop:right-[10%]" />
        <HeroBottomShapeSvg className="absolute bottom-0 right-[47%]" />
        <HeroBottomShapeSvg className="absolute bottom-0 left-[47%] -scale-x-100" />
      </div>
    </div>
  );
}
