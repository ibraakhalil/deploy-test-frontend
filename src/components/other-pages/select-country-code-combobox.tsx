"use client";

import { DropDownArrowIcon } from "@/components/svg";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import useMeasure from "react-use-measure";
import { Button } from "shadcn/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

type CountryCodeComboboxOption = {
  id: string;
  value: string;
  label: { icon: React.ReactNode; text: string };
};

type CountryCodeComboboxProps = {
  options: CountryCodeComboboxOption[];
  emptyMessage?: string;
  onSelect?: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
};

const CountryCodeCombobox = React.forwardRef<HTMLButtonElement, CountryCodeComboboxProps>(
  ({ options, emptyMessage = "No option found.", onSelect, value, setValue }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [measureRef, bounds] = useMeasure();

    const selectedOption = () => {
      const placeholderOption = options.find(option => option.value === value);
      return (
        <span className="flex items-center gap-2">
          <span>{placeholderOption?.label.icon}</span>
          <span className="truncate">{placeholderOption?.label.text}</span>
        </span>
      );
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={node => {
              measureRef(node);
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                // eslint-disable-next-line no-param-reassign
                ref.current = node;
              }
            }}
            variant="default"
            role="combobox"
            aria-expanded={open}
            className="h-11 w-full items-center justify-between bg-icon-color-10 hover:bg-icon-color-20"
          >
            <span className="truncate">{selectedOption()}</span>
            <DropDownArrowIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full bg-card-bg p-0 text-subtitle-color-secondary"
          style={{ width: bounds.width > 0 ? `${bounds.width}px` : "auto" }}
          align="start"
        >
          <Command className="w-full">
            <CommandInput placeholder="Search..." className="h-9" />
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="max-h-60 overflow-y-auto">
              {options.map(option => (
                <CommandItem
                  key={option.id}
                  value={option.value}
                  onSelect={currentValue => {
                    setValue(currentValue);
                    setOpen(false);
                    onSelect?.(currentValue);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>{option.label.icon}</span>
                    <span className="truncate">{option.label.text}</span>
                  </span>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4 flex-shrink-0",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

CountryCodeCombobox.displayName = "CountryCodeCombobox";

export { CountryCodeCombobox, type CountryCodeComboboxOption, type CountryCodeComboboxProps };
