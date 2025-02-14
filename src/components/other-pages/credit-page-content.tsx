import { Paragraph } from "@/components/common/other-page/paragraph";
import { OtherPageContentWrapper } from "@/components/other-pages/other-page-content-wrapper";
import { useTranslations } from "next-intl";

export function CreditPageContent() {
  const t = useTranslations("credit-page");

  const resources = t.raw("resources.list") as string[];

  return (
    <OtherPageContentWrapper className="max-tablet:mb-10">
      <Paragraph>
        <Paragraph.DescriptionWrapper>
          <Paragraph.P>{t("intro.p1")}</Paragraph.P>
          <Paragraph.P>{t("intro.p2")}</Paragraph.P>
        </Paragraph.DescriptionWrapper>
      </Paragraph>

      <Paragraph>
        <Paragraph.Title title={t("resources.title")} className="desktop:text-heading-6" />
        <Paragraph.DescriptionWrapper>
          <Paragraph.ListWrapper>
            {resources.map(resource => (
              <Paragraph.ListItem key={resource}>{resource}</Paragraph.ListItem>
            ))}
          </Paragraph.ListWrapper>
        </Paragraph.DescriptionWrapper>
      </Paragraph>
      <Paragraph>
        <Paragraph.P>{t("thank")}</Paragraph.P>
      </Paragraph>
    </OtherPageContentWrapper>
  );
}
