import { Link } from "@/navigation";
import { ComponentProps, ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

interface NavigateButtonProps extends ComponentProps<"a"> {
  children: ReactNode;
  href: string;
}

function NavigateButton({ children, ...props }: NavigateButtonProps) {
  return (
    <Link
      {...props}
      href={props.href}
      className={cn("rounded-sm bg-secondary-bg px-2.5 py-1.5 active:scale-95", props.className)}
    >
      {children}
    </Link>
  );
}

export function TryToNavigate() {
  return (
    <div className="space-y-2.5 text-subtitle-color">
      <p className="text-subtitle">Try to navigate</p>
      <div className="flex flex-wrap items-center gap-3">
        <NavigateButton href="/1">Al-Fatiha</NavigateButton>
        <NavigateButton href="/juz/1">Juz 1</NavigateButton>
        <NavigateButton href="/page/1">Page 1</NavigateButton>
      </div>
    </div>
  );
}
