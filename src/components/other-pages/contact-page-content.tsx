import { ContactDetails } from "@/components/other-pages/contact-details-content";
import { ContactForm } from "@/components/other-pages/contact-form";
import { OtherPageContentWrapper } from "@/components/other-pages/other-page-content-wrapper";

export function ContactPageContent() {
  return (
    <OtherPageContentWrapper className="flex flex-col justify-between gap-16 space-y-0 max-laptop:mb-10 laptop:flex-row laptop:gap-5">
      <ContactDetails />
      <ContactForm />
    </OtherPageContentWrapper>
  );
}
