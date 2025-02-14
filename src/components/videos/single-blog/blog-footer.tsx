import { FacebookIcon, LinkedInIcon, PinterestIcon, QuranIcon, TwitterIcon } from "@/components/svg";

export function BlogFooter() {
  return (
    <div className="grid grid-cols-1 gap-5 py-7 tablet:grid-cols-2">
      <div className="flex h-[80px] items-center gap-5 rounded-md bg-secondary-bg px-5">
        <div className="rounded-full bg-primary-fg p-3">
          <QuranIcon />
        </div>
        <div>
          <h3 className="text-body font-semibold">The Gift Of Ifta</h3>
          <p className="text-base text-subtitle-color">Hadith Foundation, Bangladesh</p>
        </div>
      </div>

      <div className="flex h-[80px] flex-col items-center justify-center gap-2 rounded-md bg-secondary-bg">
        <h2 className="text-body font-semibold">Share With Social Media</h2>
        <div className="flex items-center gap-3">
          <FacebookIcon className="size-6" />
          <TwitterIcon className="size-6" />
          <LinkedInIcon className="size-6" />
          <PinterestIcon className="size-6" />
        </div>
      </div>
    </div>
  );
}
