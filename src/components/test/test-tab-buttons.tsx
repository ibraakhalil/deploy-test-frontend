// "use client";

// import { getLocaleDirection } from "@/utils/intl/direction";
// import { useLocale } from "next-intl";
// import { HtmlHTMLAttributes } from "react";
// import { cn } from "shadcn/lib/utils";

// interface Tabtype {
//   label: string;
// }
// interface TabButtonsProps extends HtmlHTMLAttributes<HTMLButtonElement> {
//   tabs: Tabtype[];
//   activeTab: number;
//   handleClick(i: number): void;
//   className?: string;
// }

// export function TabButtons({ tabs, activeTab, handleClick, className }: TabButtonsProps) {
//   const dir = getLocaleDirection(useLocale());
//   const isRtl = dir === "rtl";

//   return (
//     <div
//       className={cn(
//         "relative isolate flex h-9 min-w-[200px] items-center overflow-hidden rounded-full border-4 border-secondary-bg bg-secondary-bg",
//         className
//       )}
//     >
//       {tabs.map((tab, i) => (
//         <button
//           onClick={() => handleClick(i)}
//           key={tab.label}
//           className={cn("z-10 h-full w-full text-base text-subtitle-color-secondary duration-300", {
//             "font-semibold text-pure-color": activeTab === i,
//           })}
//         >
//           {tab.label}
//         </button>
//       ))}
//       <div
//         className="absolute bottom-0 top-0 rounded-full bg-primary-bg transition-transform duration-300"
//         style={{
//           width: `calc(${100 / tabs.length}%)`,
//           transform: `translateX(${activeTab * (isRtl ? -100 : 100)}%)`,
//         }}
//       />
//     </div>
//   );
// }
