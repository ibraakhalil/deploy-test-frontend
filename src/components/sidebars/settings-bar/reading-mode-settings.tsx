import { SettingAccordion } from "@/components/common/accordion";
import { RadioButton } from "@/components/common/radio-btn";
import { Link } from "@/navigation";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "shadcn/components/ui/accordion";
import { cn } from "shadcn/lib/utils";

const mushafs = [
  {
    name: "New Madani Mushaf",
    image: "madani",
  },
  {
    name: "Hafezi Quran Mushaf",
    image: "hafezi",
  },
  {
    name: "Warsh Mushaf",
    image: "warsh",
  },
  {
    name: "Shemerly Mushaf",
    image: "shemerly",
  },
  {
    name: "Qaloon Mushaf",
    image: "qaloon",
  },
  {
    name: "Nurani Mushaf",
    image: "nurani",
  },
];

interface MushafCardProps extends React.ComponentProps<"div"> {
  isActive?: boolean;
  mushaf: (typeof mushafs)[number];
}

function MushafCard({ isActive, mushaf, ...props }: MushafCardProps) {
  return (
    <div
      {...props}
      className={cn("cursor-pointer space-y-3 rounded-sm border border-transparent bg-secondary-bg p-1 pt-2", {
        "active group border-border-color": isActive,
      })}
    >
      <div className="flex items-center gap-3 px-2">
        <RadioButton checked={isActive} />
        <h3 className="text-base font-medium group-[.active]:font-semibold group-[.active]:text-primary">
          {mushaf.name}
        </h3>
      </div>
      <div className="flex justify-center overflow-hidden rounded-[6px] bg-primary-bg text-center">
        <Image
          src={`/assets/mushafs/${mushaf.image}.png`}
          alt="Mushaf Madinah"
          width={300}
          height={100}
          className="dark:invert"
        />
      </div>
    </div>
  );
}

export function ReadingModeSettings() {
  const [activeMushaf, setActiveMushaf] = useState("");
  const handleChangeMushaf = (mushafName: string) => {
    setActiveMushaf(mushafName);
  };

  return (
    <Accordion type="single" defaultValue="Change Mushaf" collapsible className="overflow-hidden">
      <SettingAccordion title="Change Mushaf">
        <div className="h-full space-y-3 overflow-auto pb-16 pe-[--gap-end] ps-[--gap-start]">
          <Link href="/reading/3">
            <MushafCard
              mushaf={{ name: "Unicode Text Mushaf", image: "unicode" }}
              onClick={() => handleChangeMushaf(`Unicode Text Mushaf`)}
              isActive={activeMushaf === `Unicode Text Mushaf`}
            />
          </Link>
          {mushafs.map(mushaf => (
            <Link key={mushaf.name} href="/reading/image-mushaf" className="block">
              <MushafCard
                mushaf={mushaf}
                onClick={() => handleChangeMushaf(mushaf.name)}
                isActive={mushaf.name === activeMushaf}
              />
            </Link>
          ))}
        </div>
      </SettingAccordion>
    </Accordion>
  );
}
