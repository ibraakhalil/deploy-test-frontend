import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export function MonthlyDonorCard() {
  const t = useTranslations();

  return (
    <div className="relative isolate overflow-hidden rounded-md border border-primary-7 bg-primary-10 px-3 pb-3 pt-3.5">
      <div className="space-y-2">
        <p className="text-body font-bold">{t("banner.become-donor")}</p>

        <p className="relative z-20 text-subtitle text-subtitle-color-secondary">
          {t("banner.become-donor-description")}
        </p>

        {/* <MosqueBgSvg className="absolute right-0 top-7 z-10 w-full text-primary" /> */}

        <Link
          href="https://irdfoundation.com/sadaqa-jaria"
          target="_blank"
          className="!mt-3 flex h-10 w-full items-center justify-center rounded-sm bg-primary text-[14px] font-semibold text-primary-fg"
        >
          {t("common.support-us")}
        </Link>
      </div>
    </div>
  );
}
