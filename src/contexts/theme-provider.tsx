"use client";

import { defaultTheme, themes } from "@/constants/theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      themes={themes.map(theme => theme.id)}
      defaultTheme={defaultTheme}
      disableTransitionOnChange
      enableColorScheme
      attribute="class"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
