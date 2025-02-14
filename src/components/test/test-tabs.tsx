// /* eslint-disable no-nested-ternary */
// import { getLocaleDirection } from "@/utils/intl/direction";
// import { AnimatePresence, motion, Variants } from "framer-motion";
// import { useLocale } from "next-intl";
// import React, { useMemo, useState } from "react";
// import { cn } from "shadcn/lib/utils";

// interface TabProps {
//   defaultActive: string;
//   tabs: TabType[];
//   children: React.ReactNode;
// }
// interface TabType {
//   label: string;
//   value: string;
// }

// interface TabValue {
//   active: string;
//   tabs: TabType[];
//   setActive: (value: string) => void;
// }

// const TabContext = React.createContext<TabValue | undefined>(undefined);

// export function Tab({ defaultActive, tabs, children }: TabProps) {
//   const [active, setActive] = useState(defaultActive);
//   return <TabContext.Provider value={{ active, setActive, tabs }}>{children}</TabContext.Provider>;
// }

// export function useTabs() {
//   const context = React.useContext(TabContext);
//   if (!context) throw new Error("useTabs must be used within a Tab");
//   return context;
// }

// interface TabButtonProps {
//   label: string;
//   isActive: boolean;
//   onClick: () => void;
// }

// function TabButton({ label, isActive, onClick }: TabButtonProps) {
//   return (
//     <button
//       type="button"
//       className={cn("z-[1] h-[32px] w-full flex-1 text-sm text-subtitle-color-secondary transition-all duration-300", {
//         "font-semibold text-primary": isActive,
//       })}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// }

// interface TabsProps extends React.ComponentProps<"div"> {
//   onTabChange?: (index: string) => void;
// }

// export function Tabs({ onTabChange = () => {}, className, ...props }: TabsProps) {
//   const { active, setActive, tabs } = useTabs();
//   const dir = getLocaleDirection(useLocale());
//   const isRtl = dir === "rtl";

//   function onChange(value: string) {
//     setActive(value);
//     onTabChange(value);
//   }

//   const activeTabIndex = useMemo(() => tabs.findIndex(tab => tab.value === active), [active, tabs]);

//   return (
//     <div
//       className={cn("relative isolate rounded-full border-4 border-secondary-bg bg-secondary-bg", className)}
//       {...props}
//     >
//       <div className="flex items-center">
//         {tabs.map(tab => (
//           <TabButton
//             key={tab.label}
//             label={tab.label}
//             isActive={active === tab.value}
//             onClick={() => onChange(tab.value)}
//           />
//         ))}
//       </div>

//       <div
//         className="absolute bottom-0 top-0 rounded-full bg-primary-bg transition-transform duration-300"
//         style={{
//           width: `calc(${100 / tabs.length}%)`,
//           transform: `translateX(${activeTabIndex * (isRtl ? -100 : 100)}%)`,
//         }}
//       />
//     </div>
//   );
// }

// interface TabContentProps extends React.ComponentProps<typeof motion.div> {
//   value: string;
//   children: React.ReactNode;
// }

// export function getTabVariants(isRtl: boolean) {
//   return {
//     enter: (direction: number) => ({
//       x: isRtl ? (direction > 0 ? "100%" : "100%") : direction > 0 ? "100%" : "100%",
//       opacity: 0,
//       position: "absolute",
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       position: "relative",
//     },
//     exit: (direction: number) => ({
//       x: isRtl ? (direction < 0 ? "-100%" : "-100%") : direction < 0 ? "-100%" : "-100%",
//       opacity: 0,
//       position: "absolute",
//     }),
//   } satisfies Variants;
// }

// interface TabContentsProps extends React.ComponentProps<"div"> {}

// export function TabContents({ children, className, ...props }: TabContentsProps) {
//   return (
//     <div className={cn("relative h-full w-full overflow-hidden", className)} {...props}>
//       {children}
//     </div>
//   );
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export function TabContent({ value, children, className, ...props }: TabContentProps) {
//   const { active, tabs } = useTabs();
//   const dir = getLocaleDirection(useLocale());
//   const isRtl = dir === "rtl";

//   const direction = useMemo(() => {
//     const currentIndex = tabs.findIndex(tab => tab.value === active);
//     const valueIndex = tabs.findIndex(tab => tab.value === value);
//     return valueIndex - currentIndex;
//   }, [active, value, tabs]);

//   const rtlAwareVariants = getTabVariants(isRtl);

//   return (
//     <AnimatePresence initial={false} custom={direction} mode="sync">
//       {active === value && (
//         <motion.div
//           className={cn("inset-0 flex h-full w-full flex-col", className)}
//           key={value}
//           variants={rtlAwareVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.3, ease: "linear" }}
//           custom={direction}
//           {...props}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
