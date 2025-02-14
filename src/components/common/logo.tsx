import { HomeLink } from "@/components/links/home.link";
import { cn } from "@/shadcn/lib/utils";
import { LogoIcon } from "@/components/svg";

interface LogoProps extends React.ComponentProps<"div"> {}

export function Logo({ children, className }: LogoProps) {
  return (
    <HomeLink className={cn("flex items-center gap-2.5", className)}>
      {children}
      <div className="select-none space-y-[2px]">
        <h1 className="text-dark sm-max:text-base font-beVietnam mt-[2px] text-xl font-bold leading-none">
          Quran Mazid
        </h1>
        <p className="w-max text-[10px] tracking-tight text-subtitle-color">Read, Study, and Learn The Quran</p>
      </div>
    </HomeLink>
  );
}

Logo.Icon = function Logoicon({ className }: { className?: string }) {
  return <LogoIcon className={className} />;
};
