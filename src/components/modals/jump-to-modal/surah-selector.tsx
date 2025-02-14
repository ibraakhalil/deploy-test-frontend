import { Combobox } from "@/components/common/combo-box";
import { surahList } from "@/constants/surah-list";
import { truncateText } from "@/utils/truncate-text";
import { useState } from "react";
import { Command, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";

interface SurahSelectorProps {
  onChange: (value: string) => void;
  error: boolean;
}

export function SurahSelector({ onChange, error }: SurahSelectorProps) {
  const [openBox, setOpenBox] = useState(false);
  const [selectedSurahName, setSelectedSurahName] = useState("Select Surah");

  const handleSelect = (surah: (typeof surahList)[number]) => {
    setOpenBox(false);
    setSelectedSurahName(surah.name);
    onChange(surah.id.toString());
  };

  return (
    <div className="space-y-2">
      <label className="text-base font-medium text-pure-color">Select Surah</label>
      <Combobox open={openBox} onOpenChange={setOpenBox}>
        <Combobox.Trigger className="capitalize">{truncateText(selectedSurahName, 20)}</Combobox.Trigger>
        <Combobox.Content>
          <Command>
            <CommandInput placeholder="Search Surah" />
            <CommandGroup>
              {surahList.map(surah => (
                <CommandItem key={surah.id} value={surah.id.toString()} onSelect={() => handleSelect(surah)}>
                  {surah.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </Combobox.Content>
      </Combobox>
      {error && <p className="ml-2 text-subtitle text-error-color">Please select a surah</p>}
    </div>
  );
}
