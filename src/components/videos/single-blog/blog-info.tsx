import { IconContainer } from "@/components/common/icon-container";
import { ShareIcon } from "@/components/svg";
import Image from "next/image";

export function BlogInfo() {
  return (
    <div className="my-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-body font-bold tablet:text-heading-3">Dont be Sad! Wednesday Night Exclusive</h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 text-base text-subtitle-color">
            <button className="rounded-sm bg-secondary-bg px-3 py-1">Eid ul adha</button>
            <div className="flex gap-3 text-subtitle">
              <span>Ibrahim Khalil</span>
              <span>April 26, 2024</span>
            </div>
          </div>
          <IconContainer hover>
            <ShareIcon className="text-icon-color" />
          </IconContainer>
        </div>
      </div>
      <div className="relative min-h-[380px] overflow-hidden rounded-md">
        <Image src="/assets/blogs/blog3.png" alt="Random" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
