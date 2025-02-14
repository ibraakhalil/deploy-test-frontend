"use client";

import { useMemo, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CommandBoxProps {
  options: Option[];
}

interface CommandBoxReturn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (valueText: string) => void;
  selectedOption: Option;
}

// If need global state. Don't use this hook rather handle state manually

export function useCommandBox({ options }: CommandBoxProps): CommandBoxReturn {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOption = useMemo(
    () => options.find(option => option.value === value) || { value: "", label: "" },
    [options, value]
  );

  const onSelect = (valueText: string) => {
    setValue(valueText);
    setIsOpen(false);
  };

  return { isOpen, setIsOpen, onSelect, selectedOption };
}
