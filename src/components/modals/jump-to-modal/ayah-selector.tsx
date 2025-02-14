import { Combobox } from "@/components/common/combo-box";
import { surahList } from "@/constants/surah-list";
import { useEffect, useMemo, useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "shadcn/components/ui/command";

interface AyahSelectorProps {
  selectedSurah: string;
  onChange: (value: string) => void;
  error: boolean;
}

export function AyahSelector({ selectedSurah, onChange, error }: AyahSelectorProps) {
  const [openBox, setOpenBox] = useState(false);
  const [selectedAyah, setSelectedAyah] = useState("");
  const surah = useMemo(() => surahList.find(s => s.id.toString() === selectedSurah), [selectedSurah]);
  const ayahList = useMemo(() => (surah ? Array.from({ length: surah.count }, (_, i) => i + 1) : []), [surah]);

  useEffect(() => {
    setSelectedAyah("");
  }, [selectedSurah]);

  const handleSelect = (value: string) => {
    setOpenBox(false);
    setSelectedAyah(value);
    onChange(value);
  };

  const displayText = surah ? selectedAyah || `1 - ${surah.count}` : "Select Ayah";

  return (
    <div className="space-y-2">
      <label className="text-base font-medium text-pure-color">Select Ayah</label>
      <Combobox open={openBox} onOpenChange={setOpenBox}>
        <Combobox.Trigger disabled={!surah}>{displayText}</Combobox.Trigger>
        <Combobox.Content>
          <Command>
            <CommandInput placeholder="Search Ayah" />
            <CommandGroup>
              {ayahList.map(ayah => (
                <CommandItem key={ayah} value={String(ayah)} onSelect={handleSelect}>
                  {ayah}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandEmpty>Select a Surah First</CommandEmpty>
          </Command>
        </Combobox.Content>
      </Combobox>
      {error && <p className="ml-2 text-subtitle text-error-color">Please select an ayah</p>}
    </div>
  );
}
