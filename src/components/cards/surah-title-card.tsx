import Image from "next/image";
import madinah from "public/assets/ayah-page/madinah.png";
import makkah from "public/assets/ayah-page/makkah.png";
import { cn } from "@/shadcn/lib/utils";
import { BismillahSvg } from "@/components/svg/bismillah-svg";

interface SurahTitleCardProps {
  children: React.ReactNode;
}

export interface RevelationProps {
  place: string;
  className?: string;
}

interface TitleProps {
  title: string;
  subtitle: string;
}

export function SurahTitleCard({ children }: SurahTitleCardProps) {
  return (
    <div className="grid grid-cols-1 items-center px-[--padding-x] py-4 max-tablet:gap-y-6 tablet:grid-cols-3">
      {children}
    </div>
  );
}

SurahTitleCard.Revelation = function Revelation({ className, place = "makkah" }: RevelationProps) {
  const lowerCasePlace = place.toLowerCase();

  return (
    // use dark utility to make server component
    <div className={cn("w-[140px] dark:invert max-tablet:hidden", className)}>
      {lowerCasePlace === "makkah" && <Image src={makkah} alt="makkah" />}
      {lowerCasePlace === "madinah" && <Image src={madinah} alt="makkah" />}
    </div>
  );
};

SurahTitleCard.Title = function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-heading-6 font-semibold tablet:text-heading-5">{title}</h1>
      <p className="text-subtitle text-subtitle-color tablet:text-base">{subtitle}</p>
    </div>
  );
};

SurahTitleCard.Bismillah = function Bismillah() {
  return (
    <BismillahSvg className="justify-self-center text-subtitle-color max-tablet:max-w-[40cqw] tablet:justify-self-end" />
  );
};
