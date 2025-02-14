import { LeftNavBar, LeftNavBarLayout } from "@/components/layouts/left-nav";
import { cn } from "shadcn/lib/utils";

export interface NavLayoutProps extends React.ComponentProps<"div"> {}

export function NavLayout({ children, className, ...props }: NavLayoutProps) {
  return (
    <div
      className={cn("min-h-[--fs] w-full laptop:ltr:pl-[--_side-nav-size] laptop:rtl:pr-[--_side-nav-size]", className)}
      {...props}
    >
      <LeftNavBarLayout>
        <LeftNavBar />
      </LeftNavBarLayout>
      {children}
    </div>
  );
}
