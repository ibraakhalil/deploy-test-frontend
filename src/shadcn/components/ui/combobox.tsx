"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import useMeasure from "react-use-measure";
import { Button } from "shadcn/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/components/ui/popover";
import { cn } from "shadcn/lib/utils";

type ComboboxOption = {
  value: string;
  label: string;
};

type ComboboxProps = {
  options: ComboboxOption[];
  placeholder?: string;
  emptyMessage?: string;
  onSelect?: (value: string) => void;
  value?: string;
  setValue?: (value: string) => void;
  isSearchable?: boolean;
};

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  ({ options, placeholder = "Select an option...", emptyMessage = "No option found.", onSelect, setValue, value }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [_value, _setValue] = React.useState("");
    const [measureRef, bounds] = useMeasure();

    const _placeholder = React.useMemo(
      () => (_value ? options.find(option => option.value === _value)?.label : placeholder),
      [placeholder, _value, options]
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={node => {
              measureRef(node);
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <span className="truncate">{_placeholder}</span>
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                  key={option.value}
                  value={option.value}
                  onSelect={currentValue => {
                    _setValue(currentValue === _value ? "" : currentValue);
                    setValue?.(currentValue === _value ? "" : currentValue);
                    setOpen(false);
                    onSelect?.(currentValue);
                  }}
                >
                  <span className="truncate">{option.label}</span>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4 flex-shrink-0",
                      _value === option.value ? "opacity-100" : "opacity-0"
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

Combobox.displayName = "Combobox";

export { Combobox, type ComboboxOption, type ComboboxProps };
