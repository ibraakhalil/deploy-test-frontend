import { useTranslations } from "next-intl";
import { Paragraph } from "@/components/common/other-page/paragraph";
import { OtherPageContentWrapper } from "./other-page-content-wrapper";

export function PrivacyPageContent() {
  const t = useTranslations("privacy-policy");
  const userInfo = t.raw("use-of-info.list") as string[];

  return (
    <OtherPageContentWrapper>
      <Paragraph>
        <Paragraph.DescriptionWrapper>
          <Paragraph.P>{t("heading.p1")}</Paragraph.P>
          <Paragraph.P>{t("heading.p2")}</Paragraph.P>
        </Paragraph.DescriptionWrapper>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("collection-info.title")} />
        <Paragraph.P>{t("collection-info.description")}</Paragraph.P>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("personal-data.title")} />
        <Paragraph.P>{t("personal-data.description")}</Paragraph.P>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("mobile-device-access.title")} />
        <Paragraph.P>{t("mobile-device-access.description")}</Paragraph.P>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("push-notification.title")} />
        <Paragraph.P>{t("push-notification.description")}</Paragraph.P>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("use-of-info.title")} />
        <Paragraph.DescriptionWrapper>
          <Paragraph.P>{t("use-of-info.description")}</Paragraph.P>
          <Paragraph.ListWrapper>
            {userInfo.map(item => (
              <Paragraph.ListItem key={item}>{item}</Paragraph.ListItem>
            ))}
          </Paragraph.ListWrapper>
        </Paragraph.DescriptionWrapper>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("disclosure.title")} />
        <Paragraph.P>{t("disclosure.description")}</Paragraph.P>
      </Paragraph>
    </OtherPageContentWrapper>
  );
}
