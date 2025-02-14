"use client";

import { IconContainer } from "@/components/common/icon-container";
import { SunIcon } from "@/components/svg";
import { themes } from "@/constants/theme";
import { useIsHydrated } from "@/hooks/use-is-hydrate";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "shadcn/components/ui/dropdown-menu";
import { cn } from "shadcn/lib/utils";
import { Tooltip } from "@/components/common/tooltip";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const ThemeIcon = themes.find(thm => thm.id === theme)?.icon || SunIcon;

  if (!isHydrated)
    return (
      <IconContainer>
        <SunIcon className="text-primary" />
      </IconContainer>
    );

  return (
    <DropdownMenu>
      <Tooltip content="Theme">
        <DropdownMenuTrigger className="flex items-center gap-1 outline-none" asChild>
          <IconContainer>
            <ThemeIcon className="text-primary" />
          </IconContainer>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent align="center">
        <div className="space-y-1 p-2">
          {themes.map(colorTheme => (
            <DropdownMenuItem
              key={colorTheme.id}
              onClick={() => setTheme(colorTheme.id)}
              className={cn(
                "cursor-pointer rounded-sm px-2 py-1 hover:bg-secondary-bg",
                theme === colorTheme.id && "bg-secondary-bg"
              )}
            >
              <div className="flex items-center gap-4">
                <colorTheme.icon className="size-4 text-icon-color" /> {colorTheme.name}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
