import { FacebookIcon, GmailIcon, LinkedInIcon, TwitterIcon } from "@/components/svg";
import { useTranslations } from "next-intl";

export function ContactDetails() {
  const t = useTranslations("contact-us.content");

  return (
    <div className="w-full laptop:max-w-[700px]">
      <p className="mb-8 w-full text-center text-subtitle text-subtitle-color-secondary tablet:text-left laptop:mb-6 desktop:mb-8 desktop:text-title">
        {t("description")}
      </p>
      <div className="flex flex-col gap-4 tablet:flex-row">
        {/* Social media Share */}
        <div className="flex w-full flex-col gap-3 rounded-md bg-secondary-bg p-4">
          <h4 className="text-base font-semibold !leading-none text-pure-color desktop:text-title">
            {t("social-media")}
          </h4>
          <div className="flex items-center gap-5">
            <a href="/#" className="duration-300 hover:scale-105">
              <FacebookIcon className="size-6" />
            </a>
            <a href="/#" className="duration-300 hover:scale-105">
              <LinkedInIcon className="size-6" />
            </a>
            <a href="/#" className="duration-300 hover:scale-105">
              <TwitterIcon className="size-6" />
            </a>
          </div>
        </div>
        {/* Author info */}
        <div className="flex w-full flex-col gap-3 rounded-md bg-secondary-bg p-4">
          <h4 className="text-base font-semibold !leading-none text-pure-color desktop:text-title">{t("mail-info")}</h4>
          <div className="flex items-center gap-2.5 text-base text-subtitle-color desktop:text-title">
            <GmailIcon />
            <span className="text-pure-color">{t("email")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
