/* eslint-disable no-nested-ternary */

"use client";

import { AnimatePresence, motion, Variants as FramerVariants } from "framer-motion";
import React, {
  Children,
  cloneElement,
  ComponentProps,
  createContext,
  isValidElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { cn } from "shadcn/lib/utils";
import { TabNavigation } from "./tab-navigation";

interface TabProps {
  children: ReactNode;
  defaultTab?: number;
  animationType?: "horizontal" | "vertical";
}

interface TabContentProps extends ComponentProps<"div"> {
  children: ReactNode;
}

interface TabItem {
  label: ReactNode;
  children: ReactNode;
}
interface AnimationProps {
  isForward: boolean;
  isRtl: boolean;
  animationType: "horizontal" | "vertical";
}

interface TabContextProps extends AnimationProps {
  activeTabIndex: number;
  handleTabChange: (index: number) => void;
  labels: string[];
  setLabels: React.Dispatch<React.SetStateAction<string[]>>;
  isPending: boolean;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) throw new Error("Tab components must be used within Tab");
  return context;
}

type VariantFactory = (props: AnimationProps) => FramerVariants;

const animationVariants: VariantFactory = ({ isForward, isRtl, animationType }) => ({
  enter: {
    x: animationType === "horizontal" ? (isForward ? (isRtl ? "-100%" : "100%") : isRtl ? "100%" : "-100%") : 0,
    y: animationType === "vertical" ? 70 : 0,
    opacity: animationType === "vertical" ? 0 : 1,
  },
  center: { x: 0, y: 0, opacity: 1 },
  exit: {
    x: animationType === "horizontal" ? (isForward ? (isRtl ? "100%" : "-100%") : isRtl ? "-100%" : "100%") : 0,
  },
});

export function Tab({ children, defaultTab = 0, animationType = "horizontal" }: TabProps) {
  const [labels, setLabels] = useState<string[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTab);
  const [isPending, startTransition] = useTransition();
  const [isForward, setIsForward] = useState(true);
  const isRtl = false;

  useEffect(() => {
    setActiveTabIndex(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (i: number) => {
    setIsForward(i > activeTabIndex);
    startTransition(() => {
      setActiveTabIndex(i);
    });
  };

  return (
    <TabContext.Provider
      value={{
        activeTabIndex,
        handleTabChange,
        labels,
        setLabels,
        isPending,
        isForward,
        isRtl,
        animationType,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

function Trigger({ ...props }) {
  const { activeTabIndex, handleTabChange, labels } = useTabContext();
  return <TabNavigation tabs={labels} handleClick={handleTabChange} activeTab={activeTabIndex} {...props} />;
}

function AnimationLayer({ children }: { children: ReactNode[] }) {
  const { activeTabIndex, isForward, isRtl, animationType = "horizontal" } = useTabContext();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={activeTabIndex}
        variants={animationVariants({ isForward, isRtl, animationType })}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ ease: "easeOut", duration: 0.4 }}
        className="flex h-full flex-col"
      >
        <div className="relative flex h-full flex-col will-change-transform">{children[activeTabIndex]}</div>
      </motion.div>
    </AnimatePresence>
  );
}

function Content({ children, ...props }: TabContentProps) {
  const { setLabels } = useTabContext();

  const allChildren = useMemo(() => {
    return Children.toArray(children).filter(child => isValidElement(child));
  }, [children]);

  useEffect(() => {
    const labels = allChildren.map(child => (child as React.ReactElement).props.label);
    setLabels(labels);
  }, [allChildren, setLabels]);

  return (
    <div {...props} className={cn("relative h-full w-full overflow-hidden", props.className)}>
      <AnimationLayer>{allChildren}</AnimationLayer>
    </div>
  );
}

const ContentItem = ({ children, label }: TabItem) => {
  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, { key: label as string });
};

Tab.Trigger = Trigger;
Tab.Content = Content;
Tab.ContentItem = ContentItem;
