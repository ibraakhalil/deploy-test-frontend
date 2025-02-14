import { LeftSideBar, LeftSideBarLayout } from "@/components/layouts/left-sidebar";
import { RightSideBar, RightSideBarLayout } from "@/components/layouts/right-sidebar";
import { cn } from "shadcn/lib/utils";

interface SideBarLayoutProps extends React.ComponentProps<"div"> {}

export function SideBarLayout({ children, className, ...props }: SideBarLayoutProps) {
  return (
    <div
      className={cn(
        "grid min-h-[--fs] grid-cols-[var(--left-sidebar-size)_minmax(0,1fr)_var(--right-sidebar-size)] max-desktop:grid-cols-[var(--left-sidebar-size)_minmax(0,1fr)] max-laptop:grid-cols-1",
        className
      )}
      {...props}
    >
      <LeftSideBarLayout>
        <LeftSideBar />
      </LeftSideBarLayout>
      <div className="mb-[--bottom-bar-size] mt-[--_top-nav-size]">{children}</div>
      <RightSideBarLayout>
        <RightSideBar />
      </RightSideBarLayout>
    </div>
  );
}
