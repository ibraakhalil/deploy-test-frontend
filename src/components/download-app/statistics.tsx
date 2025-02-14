import { StarIcon } from "@/components/svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import usersImg from "public/assets/project/download-app/users.png";

export function Statistics() {
  const t = useTranslations("download-app.status");
  return (
    <div className="flex flex-wrap justify-center gap-8 tablet:justify-start">
      <div className="space-y-1 tablet:space-y-2 desktop:space-y-2.5">
        <div className="flex items-center justify-center gap-1.5 laptop:justify-start">
          <StarIcon />
          <p className="text-subtitle font-bold text-pure-color tablet:text-base">{t("reviews", { value: 4.8 })}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <Image src={usersImg} alt="users" />
          <p className="text-subtitle text-subtitle-color-secondary laptop:text-base">
            {t("total-users", { user: 54.5 })}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 tablet:justify-start">
        <div className="tablet:space-y-1">
          <h4 className="text-center font-bold text-pure-color tablet:text-body laptop:text-start desktop:text-heading-6">
            {t("value", { value: 450 })}
          </h4>
          <p className="text-subtitle text-subtitle-color-secondary laptop:text-base">{t("active-users")}</p>
        </div>
        <div className="tablet:space-y-1">
          <h4 className="text-center font-bold text-pure-color tablet:text-body laptop:text-start desktop:text-heading-6">
            {t("value", { value: 500 })}
          </h4>
          <p className="text-subtitle text-subtitle-color-secondary laptop:text-base">{t("downloads")}</p>
        </div>
      </div>
    </div>
  );
}
