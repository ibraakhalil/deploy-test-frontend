import { AppStoreIcon, PlayStoreIcon } from "@/components/svg";

interface DownloadButtonProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link: string;
}

export function DownloadButton({ title, subtitle, icon, link }: DownloadButtonProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="w-[157px] select-none items-center gap-4 rounded-[10px] border border-primary-7 bg-primary-7 p-2.5 tablet:w-[178px] desktop:p-3">
        <div className="flex items-center gap-2 laptop:gap-3">
          {icon}
          <div className="flex flex-col gap-0.5 tablet:gap-1">
            <span
              data-lan="en"
              className="text-left text-[0.6875rem] !leading-none text-subtitle-color-secondary laptop:text-subtitle"
            >
              {title}
            </span>
            <span
              data-lan="en"
              className="text-left text-subtitle font-semibold !leading-none text-pure-color tablet:text-base"
            >
              {subtitle}
            </span>
          </div>
        </div>
      </button>
    </a>
  );
}

export function DownloadButtonGroup() {
  return (
    <div className="mb-6 flex items-center gap-4 tablet:mb-11 desktop:mb-8">
      <DownloadButton
        title="Download on the"
        link="https://play.google.com/store/apps/details?id=com.ihadith.quranpro"
        subtitle="Google Play"
        icon={<PlayStoreIcon className="size-6 desktop:size-7" />}
      />
      <DownloadButton
        title="Download on the"
        link="https://apps.apple.com/us/app/quran-majeed-pro/id1610165189"
        subtitle="App Store"
        icon={<AppStoreIcon className="size-6 text-pure-color desktop:size-7" />}
      />
    </div>
  );
}
