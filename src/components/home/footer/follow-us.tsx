import { FaceBookIcon2, TwitterIcon2 } from "@/components/svg";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface SocialLink {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const socialLinks: SocialLink[] = [
  { href: "/#1", icon: FaceBookIcon2 },
  { href: "/#2", icon: TwitterIcon2 },
  { href: "/#3", icon: TwitterIcon2 },
];

export function FollowUs() {
  const t = useTranslations("footer");

  return (
    <div className="flex-grow space-y-3 tablet:space-y-4 laptop:space-y-5">
      <h2 className="text-subtitle font-bold text-pure-color tablet:text-base desktop:text-title">{t("follow-us")}</h2>
      <div className="flex items-center gap-4">
        {socialLinks.map(link => (
          <Link key={`follow-us-${link.href}`} href={link.href} className="duration-150 hover:scale-105">
            <link.icon className="text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
}
