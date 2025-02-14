import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface LinkProps {
  href: string;
  text: string;
}

const links: LinkProps[] = [
  { href: "/#", text: "Quranmazid.com" },
  { href: "/#", text: "Duaruqyah.com" },
  { href: "/#", text: "Quran Majeed App" },
  { href: "/#", text: "Dua & Rukia App" },
  { href: "/#", text: "Al Hadith App" },
];

export function ImportantLinks() {
  const t = useTranslations("footer");

  return (
    <div className="flex-grow space-y-3 tablet:space-y-4 laptop:space-y-5">
      <h2 className="text-subtitle font-bold text-pure-color tablet:text-base desktop:text-title">
        {t("important-links")}
      </h2>
      <ul
        data-lang="en"
        className="flex flex-col gap-2.5 text-subtitle text-subtitle-color-secondary tablet:text-base laptop:gap-3 desktop:text-title"
      >
        {links.map(link => (
          <li key={`important-link-${link.text}`}>
            <Link href={link.href} className="duration-300 hover:text-subtitle-color-80">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
