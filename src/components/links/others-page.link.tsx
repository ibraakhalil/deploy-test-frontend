import { Link } from "@/navigation";

interface OurProjectPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function OurProjectPageLink(props: OurProjectPageLinkProps) {
  return <Link {...props} href="/projects" />;
}

interface PrivacyPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function PrivacyPageLink(props: PrivacyPageLinkProps) {
  return <Link {...props} href="/privacy-policy" />;
}

interface CreditPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function CreditPageLink(props: CreditPageLinkProps) {
  return <Link {...props} href="/credit" />;
}

interface CopyrightPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function CopyrightPageLink(props: CopyrightPageLinkProps) {
  return <Link {...props} href="/copyright" />;
}

interface AboutUsPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function AboutUsPageLink(props: AboutUsPageLinkProps) {
  return <Link {...props} href="/about-us" />;
}

interface ContactUsPageLinkProps extends Omit<React.ComponentProps<typeof Link>, "href"> {}

export function ContactUsPageLink(props: ContactUsPageLinkProps) {
  return <Link {...props} href="/contact" />;
}
