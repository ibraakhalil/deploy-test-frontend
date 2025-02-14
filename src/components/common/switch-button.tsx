"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "shadcn/lib/utils";

interface SwitchProps {
  isActive?: boolean;
  onChange?: (isActive: boolean) => void;
  id?: string;
  ariaLabel?: string;
}

export function Switch({
  isActive: controlledIsActive,
  onChange,
  id = "switch",
  ariaLabel = "Toggle switch",
}: SwitchProps) {
  const [internalIsActive, setInternalIsActive] = useState(false);
  const isControlled = controlledIsActive !== undefined;
  const isActive = isControlled ? controlledIsActive : internalIsActive;

  const switchRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!isControlled) {
      setInternalIsActive(!internalIsActive);
    }
    onChange?.(!isActive);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  useEffect(() => {
    const switchElement = switchRef.current;
    if (switchElement) {
      switchElement.setAttribute("aria-checked", isActive.toString());
    }
  }, [isActive]);

  return (
    <div
      ref={switchRef}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      tabIndex={0}
      id={id}
      aria-checked={isActive}
      aria-label={ariaLabel}
      className={cn(
        "flex h-6 w-[44px] cursor-pointer items-center justify-start rounded-full border border-border-color bg-secondary-bg px-[3px]",
        {
          "justify-end": isActive,
        }
      )}
    >
      <motion.div
        layoutId={id}
        className={cn("size-[18px] rounded-full bg-primary-20", { "bg-primary": isActive })}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 40,
        }}
      />
    </div>
  );
}
