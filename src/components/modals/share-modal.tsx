import { CopyIcon, FacebookIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "@/components/svg";
import { cn } from "shadcn/lib/utils";

interface ShareModalProps extends React.ComponentProps<"div"> {}

export function ShareModal({ className, ...props }: ShareModalProps) {
  return (
    <div className={cn("bg-card-bg p-4", className)} {...props}>
      <h3 className="mb-5 text-center text-heading-5 font-bold leading-none text-pure-color">Social Share</h3>
      <div>
        <p className="mb-2 px-2.5 text-title font-semibold text-pure-color">Share On Social Media</p>
        <div className="mb-5 flex items-center gap-5 px-2.5">
          <FacebookIcon className="size-7" />
          <TwitterIcon className="size-7" />
          <LinkedInIcon className="size-7" />
          <PinterestIcon className="size-7" />
        </div>
        <p className="mb-1 px-2.5 text-title font-semibold text-pure-color">or, Copy link</p>
        <div className="mb-2 flex h-12 items-center justify-between rounded-md border border-border-color bg-secondary-bg px-4 text-subtitle-color-secondary">
          <p className="max-w-[380px] flex-1 truncate text-subtitle">https://www.isalmicqa.com/post/123456</p>
          <CopyIcon />
        </div>
      </div>
    </div>
  );
}
