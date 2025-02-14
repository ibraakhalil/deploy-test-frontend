/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { ShareIcon } from "../svg";

export function FeaturedVideo() {
  return (
    <div className="my-6 grid grid-cols-1 gap-7 laptop:grid-cols-2">
      <div className="relative min-h-[240px] overflow-hidden rounded-md">
        <Image src="/assets/videos/video-1.png" alt="Random" layout="fill" objectFit="cover" />
      </div>
      <div className="space-y-3">
        <h1 className="text-heading-4 font-bold uppercase tablet:text-heading-3 laptop:text-heading-2">
          Don't be zealous! Wednesday night exclusive.
        </h1>
        <div className="flex items-center justify-between border-b border-border-color py-3">
          <div className="flex flex-wrap items-center gap-2 text-base text-subtitle-color">
            <Image
              src="/assets/videos/video-1.png"
              alt="Calendar"
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
            <span>Ibrahim Khalil</span>
          </div>
          <div className="flex justify-end gap-4">
            <span>Share</span>
            <ShareIcon className="text-icon-color" />
          </div>
        </div>
        <p className="line-clamp-4 text-title">
          Join us for a soul-enriching journey as we delve into the depths of Islamic wisdom in our exclusive Wednesday
          night session, "Don't Be Sad!" Explore the timeless teachings of Islam that offer solace, hope, and guidance
          in times of difficulty. Join us for a soul-enriching journey as we delve into the depths of Islamic wisdom in
          our exclusive Wednesday night session, "Don't Be Sad!" Explore the timeless teachings of Islam that offer
          solace, hope, and guidance in times of difficulty.
        </p>
      </div>
    </div>
  );
}
