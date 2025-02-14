import { OthersPageLinks } from "@/components/home/footer//others-page-links";
import { SiteInfo } from "@/components/home/footer//site-info";
import { FollowUs } from "@/components/home/footer/follow-us";
import { ImportantLinks } from "@/components/home/footer/important-links";
import { FooterImgTR } from "@/components/svg/footer-svg";
import { FooterImgBR } from "@/components/svg/footer/footer-bottom-svg";
import { FooterImgTL } from "@/components/svg/footer/footer-mosque";

export function Footer() {
  return (
    <footer>
      <div className="relative h-[200px] max-tablet:hidden desktop:h-[300px]">
        <FooterImgTL
          className="absolute bottom-0 left-0"
          fill="rgb(var(--footer-shade-3))"
          bottomFill="rgb(var(--footer-shade-2))"
          fillLight="rgb(var(--footer-shade-2))"
        />
        <FooterImgTR
          className="absolute bottom-0 right-0"
          fill="rgb(var(--footer-shade-2))"
          fillLight="rgb(var(--footer-shade-1))"
        />
      </div>
      <div className="relative w-full items-center justify-center bg-[rgb(var(--footer-shade-1))] tablet:pb-20">
        <div className="mx-5 flex max-w-[1320px] flex-col justify-between gap-7 py-6 tablet:mx-10 tablet:py-12 laptop:flex-row laptop:gap-[7%] desktop:mx-auto desktop:gap-[10%]">
          <SiteInfo />
          <div className="flex flex-1 flex-wrap gap-12 laptop:justify-between laptop:gap-12">
            <OthersPageLinks />
            <ImportantLinks />
            <FollowUs />
          </div>
        </div>
        <FooterImgBR fill="rgb(var(--footer-shade-2))" className="absolute bottom-0 right-0 max-tablet:hidden" />
      </div>
    </footer>
  );
}
