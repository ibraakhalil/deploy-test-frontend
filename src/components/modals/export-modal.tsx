"use client";

import { CheckBox } from "@/components/common/check-box";
import { useState } from "react";
import { ModalButtonPair } from "@/components/modals/modal-button-pair";

interface ExportOption {
  id: string;
  label: string;
}

const exportOptions: ExportOption[] = [
  { id: "bookmark", label: "Bookmark" },
  { id: "pin", label: "Pin" },
  { id: "lastRead", label: "Last Read" },
];

interface ExportModalProps extends React.ComponentProps<"div"> {
  onApply: (selectedOptions: string[]) => void;
}

export function ExportModal({ onApply, className, ...props }: ExportModalProps) {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      return newSet;
    });
  };

  return (
    <div className={className} {...props}>
      <div className="flex flex-col justify-center gap-4 p-6">
        <p className="font-semibold text-pure-color">If you want to export files, please select the export options.</p>
        <div className="space-y-3 px-3">
          {exportOptions.map(option => (
            <label key={option.id} htmlFor={option.id} className="flex cursor-pointer select-none items-center gap-4">
              <CheckBox
                id={option.id}
                checked={selectedOptions.has(option.id)}
                onChange={() => toggleOption(option.id)}
              />
              <span className="mt-0.5 text-body">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <ModalButtonPair ApplyButtonTitle="Export Now" onApply={onApply} />
    </div>
  );
}
