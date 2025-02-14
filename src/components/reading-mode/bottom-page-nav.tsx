import { useState } from "react";
import { DropDownArrowIcon } from "@/components/svg";

interface BottomPageNavigationProps {
  length: number;
  current?: number;
  onChange?: (value: string) => void;
}

interface NavBottomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function NavButton({ children, ...props }: NavBottomProps) {
  return (
    <button
      {...props}
      className="flex h-8 cursor-pointer items-center gap-2 overflow-hidden px-3 text-subtitle text-subtitle-color disabled:cursor-not-allowed disabled:text-subtitle-color-50"
    >
      {children}
    </button>
  );
}

export function BottomPageNavigation({ length, current, onChange }: BottomPageNavigationProps) {
  const [activePage, setActivePage] = useState(current || 1);

  const handlePrev = () => {
    if (onChange && activePage > 1) {
      setActivePage(activePage - 1);
      onChange("prev");
    }
  };

  const handleNext = () => {
    if (onChange && activePage < length) {
      setActivePage(activePage + 1);
      onChange("next");
    }
  };

  return (
    <div className="z-10 flex items-center gap-8 rounded-full border border-border-color bg-secondary-bg">
      <NavButton onClick={handlePrev} disabled={activePage === 1}>
        <DropDownArrowIcon className="size-3 rotate-90" /> <span>Prev</span>
      </NavButton>
      <NavButton onClick={handleNext} disabled={activePage === length - 1}>
        <span>Next</span>
        <DropDownArrowIcon className="size-3 -rotate-90" />
      </NavButton>
    </div>
  );
}
