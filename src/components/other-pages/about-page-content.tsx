import { Paragraph } from "@/components/common/other-page/paragraph";
import { OtherPageContentWrapper } from "@/components/other-pages/other-page-content-wrapper";
import { useTranslations } from "next-intl";

export function AboutPageContent() {
  const t = useTranslations("about-page");

  const projects = t.raw("projects.list") as string[];

  return (
    <OtherPageContentWrapper className="max-tablet:mb-10">
      <Paragraph>
        <Paragraph.DescriptionWrapper>
          <Paragraph.P>{t("heading.p1")}</Paragraph.P>
          <Paragraph.P>{t("heading.p2")}</Paragraph.P>
          <Paragraph.P>{t("heading.p3")}</Paragraph.P>
        </Paragraph.DescriptionWrapper>
      </Paragraph>
      <Paragraph>
        <Paragraph.Title title={t("projects.title")} className="desktop:text-heading-6" />
        <Paragraph.DescriptionWrapper>
          <Paragraph.ListWrapper>
            {projects.map(project => (
              <Paragraph.ListItem key={project}>{project}</Paragraph.ListItem>
            ))}
          </Paragraph.ListWrapper>
        </Paragraph.DescriptionWrapper>
      </Paragraph>
      <p className="text-subtitle tablet:text-base desktop:text-body">
        <span className="text-subtitle-color-secondary">{t("visit-all-projects")}</span>
        <span className="font-semibold text-primary">
          <a href="https://irdfoundation.com/" target="_blank" rel="noreferrer">
            {t("visit-link")}
          </a>
        </span>
      </p>
    </OtherPageContentWrapper>
  );
}
