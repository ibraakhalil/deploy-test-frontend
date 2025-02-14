import { isDev } from "@/config/env";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useNavStore = create(
  devtools(
    immer(
      combine({ isNavVisible: true }, (set, get) => ({
        setIsNavVisible: (isVisible: boolean | ((isVisible: boolean) => boolean)) => {
          const store = get();

          if (typeof isVisible === "function") {
            set({ isNavVisible: isVisible(store.isNavVisible) });
          } else {
            set({ isNavVisible: isVisible });
          }
        },
      }))
    ),
    { enabled: isDev, name: "nav-store" }
  )
);
