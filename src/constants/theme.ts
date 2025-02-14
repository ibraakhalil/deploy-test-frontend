import { MoonIcon, SepiaIcon, SunIcon, SystemThemeIcon } from "@/components/svg";

export const themes = [
  { id: "light", name: "Light", icon: SunIcon },
  { id: "sepia", name: "Sepia", icon: SepiaIcon },
  { id: "dark", name: "Dark", icon: MoonIcon },
  { id: "system", name: "System", icon: SystemThemeIcon },
];

export const defaultTheme = "system";
