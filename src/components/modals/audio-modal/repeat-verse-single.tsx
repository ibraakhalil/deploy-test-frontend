import { Combobox } from "@/components/common/combo-box";
import React, { useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";

interface VerseSelectionProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

interface CounterProps {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  showInfinity?: boolean;
}

interface CounterRowProps extends CounterProps {
  label: string;
}

export function VerseSelection({ label, value, onChange }: VerseSelectionProps) {
  const [openBox, setOpenBox] = useState(false);
  const options = Array.from({ length: 10 }, (_, i) => ({ label: `1:${i + 1}`, value: `1:${i + 1}` }));

  const handleSelect = (verseValue: string) => {
    onChange(verseValue);
    setOpenBox(false);
  };

  return (
    <div className="w-full space-y-2">
      <label className="text-base font-medium">{label}:</label>
      <Combobox open={openBox} onOpenChange={setOpenBox}>
        <Combobox.Trigger>{value || "Select From Verse"}</Combobox.Trigger>
        <Combobox.Content>
          <Command>
            <CommandInput />
            <CommandGroup className="max-h-[200px]">
              {options.map(option => (
                <CommandItem
                  key={option.label}
                  value={option.value}
                  onSelect={handleSelect}
                  className={option.value === value ? "active" : ""}
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandEmpty />
          </Command>
        </Combobox.Content>
      </Combobox>
    </div>
  );
}

function Counter({ value, setValue, min = 0, max = 99, showInfinity = false }: CounterProps) {
  const increase = () => {
    if (showInfinity && value === max) {
      setValue(Infinity);
    } else if (value < max) {
      setValue(value + 1);
    }
  };

  const decrease = () => {
    if (value === Infinity) {
      setValue(max);
    } else {
      setValue(Math.max(min, value - 1));
    }
  };

  return (
    <div className="flex items-center space-x-2 text-base">
      <button onClick={decrease} className="p-1">
        -
      </button>
      <span className="w-8 text-center">{value === Infinity ? "∞" : value.toString().padStart(2, "0")}</span>
      <button onClick={increase} className="p-1">
        +
      </button>
    </div>
  );
}

export function CounterRow({ label, value, setValue, ...props }: CounterRowProps) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-gray-600 text-sm">{label}</span>
      <Counter value={value} setValue={setValue} {...props} />
    </div>
  );
}

export function SingleRepeat() {
  const [fromVerse, setFromVerse] = useState("1:1");
  const [toVerse, setToVerse] = useState("1:1");
  const [playRange, setPlayRange] = useState(0);
  const [delayBetweenVerse, setDelayBetweenVerse] = useState(0);

  return (
    <div className="space-y-4 px-[--padding-x]">
      <div className="flex justify-between gap-4">
        <VerseSelection label="From Verse" value={fromVerse} onChange={setFromVerse} />
        <VerseSelection label="To Verse" value={toVerse} onChange={setToVerse} />
      </div>
      <div className="space-y-2">
        <CounterRow label="Play Range" value={playRange} setValue={setPlayRange} min={0} max={9} showInfinity />
        <CounterRow label="Delay Between Verse" value={delayBetweenVerse} setValue={setDelayBetweenVerse} />
      </div>
    </div>
  );
}
