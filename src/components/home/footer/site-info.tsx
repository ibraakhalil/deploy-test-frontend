import { Logo } from "@/components/common/logo";
import { useTranslations } from "next-intl";

export function SiteInfo() {
  const t = useTranslations("footer.site-info");

  return (
    <div className="flex w-full flex-col gap-2.5 tablet:gap-3 laptop:max-w-[427px] laptop:gap-7">
      <Logo className="hidden tablet:flex">
        <Logo.Icon />
      </Logo>
      <h3 className="text-heading-6 font-bold text-pure-color tablet:hidden">Quran Mazid</h3>
      <p className="text-subtitle text-subtitle-color-secondary tablet:text-base desktop:text-title">
        {t("description")}
      </p>
    </div>
  );
}
