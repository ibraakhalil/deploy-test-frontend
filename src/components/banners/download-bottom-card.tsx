import { CloseCrossIcon } from "@/components/svg";

export function DownloadBottomCard() {
  return (
    <div className="flex max-w-[420px] bg-[#353934] pr-3">
      <button className="flex h-auto w-[50px] flex-shrink-0 items-center justify-center bg-[#292D28]">
        <CloseCrossIcon className="size-6 text-subtitle-color" />
      </button>
      <p className="px-2 py-1 text-subtitle text-primary-fg">
        আরও সুন্দর ও সাবলীলভাবে হাদিস অধ্যয়নের জন্য আমাদের আল হাদিস মোবাইল অ্যাপ ব্যবহার করুন
      </p>
      <button className="h-[26px] flex-shrink-0 self-center rounded-full bg-primary-fg px-3 text-[10px] font-semibold text-pure-color">
        Download
      </button>
    </div>
  );
}
