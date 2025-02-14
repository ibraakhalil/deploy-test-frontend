import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface LinkType {
  href: string;
  text: string;
}

export function OthersPageLinks() {
  const t = useTranslations("footer.other-pages");
  const links: LinkType[] = [
    { href: "/#", text: t("about") },
    { href: "/#", text: t("privacy") },
    { href: "/#", text: t("books") },
    { href: "/#", text: t("blog") },
    { href: "/#", text: t("videos") },
  ];

  return (
    <div className="flex-grow space-y-3 tablet:space-y-4 laptop:space-y-5">
      <h2 className="text-subtitle font-bold text-pure-color tablet:text-base desktop:text-title">
        {t("other-pages")}
      </h2>
      <ul className="flex flex-col gap-2.5 text-subtitle text-subtitle-color-secondary tablet:text-base laptop:gap-3 desktop:text-title">
        {links.map(link => (
          <li key={`other-links-${link.text}`}>
            <Link href={link.href} className="duration-300 hover:text-subtitle-color-80">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
