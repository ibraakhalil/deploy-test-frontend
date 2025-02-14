import { getLocaleDirection } from "@/utils/intl/direction";
import { useLocale } from "next-intl";
import { cn } from "shadcn/lib/utils";

interface TabButtonsProps extends Omit<React.ComponentProps<"div">, "onChange"> {
  tabs: string[];
  activeTab: number;
  handleClick: (tabId: number) => unknown;
}

export function TabNavigation({ tabs, handleClick, className, activeTab = 0, ...props }: TabButtonsProps) {
  const dir = getLocaleDirection(useLocale());
  const isRtl = dir === "rtl";

  return (
    <div
      {...props}
      className={cn(
        "relative isolate flex min-h-9 items-center rounded-full border-4 border-secondary-bg bg-secondary-bg",
        className
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => {
            handleClick(index);
          }}
          className={cn("z-10 h-full w-full text-base text-subtitle-color-secondary", {
            "font-semibold text-pure-color": index === activeTab,
          })}
        >
          {tab}
        </button>
      ))}

      <div
        className="absolute h-full rounded-full bg-primary-bg transition-transform duration-300 ease-in-out"
        style={{
          width: `calc(${100 / tabs.length}%)`,
          transform: `translateX(${activeTab * (isRtl ? -100 : 100)}%)`,
        }}
      />
    </div>
  );
}
