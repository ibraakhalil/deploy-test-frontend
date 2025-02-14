"use client";

import { DropDownArrowIcon } from "@/components/svg";
import { ComponentProps, createContext, useContext, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

interface ComboboxProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}
interface ComboboxTriggerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  asChild?: boolean;
  disabled?: boolean;
}
interface ComboboxContentProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}
interface ComboBoxContextProps {
  triggerWidth: number;
  setTriggerWidth: (width: number) => void;
}

const ComboboxContext = createContext<ComboBoxContextProps | undefined>(undefined);

function useComboBoxContext() {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error("Combobox compound components cannot be rendered outside the Combobox component");
  }
  return context;
}

export function Combobox({ children, ...props }: ComboboxProps) {
  const [triggerWidth, setTriggerWidth] = useState<number>(0);

  return (
    <ComboboxContext.Provider value={{ triggerWidth, setTriggerWidth }}>
      <Popover {...props}>{children}</Popover>
    </ComboboxContext.Provider>
  );
}

Combobox.Trigger = function ComboboxTrigger({ children, className, asChild, disabled }: ComboboxTriggerProps) {
  const { setTriggerWidth } = useComboBoxContext();

  const handleClick = (e: React.MouseEvent) => {
    setTriggerWidth(e.currentTarget.clientWidth);
  };

  if (asChild) {
    return (
      <PopoverTrigger onClick={handleClick} className="w-full disabled:cursor-not-allowed" disabled={disabled}>
        {children}
      </PopoverTrigger>
    );
  }

  return (
    <PopoverTrigger onClick={handleClick} className="w-full disabled:cursor-not-allowed" disabled={disabled}>
      <div
        className={cn(
          "flex min-h-[40px] items-center justify-between rounded-sm bg-secondary-bg px-4 text-subtitle-color",
          className
        )}
      >
        {children}
        <DropDownArrowIcon className="text-icon-color" />
      </div>
    </PopoverTrigger>
  );
};

Combobox.Content = function ComboboxContent({ children, className }: ComboboxContentProps) {
  const { triggerWidth } = useComboBoxContext();

  return (
    <PopoverContent style={{ width: `${triggerWidth}px` }} className={className}>
      {children}
    </PopoverContent>
  );
};
