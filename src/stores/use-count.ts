import { isDev } from "@/config/env";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCount = create(
  devtools(
    immer(
      combine({ count: 0 }, set => ({
        increment: () =>
          set(state => {
            state.count++;
          }),
        decrement: () =>
          set(state => {
            state.count--;
          }),
      }))
    ),
    { enabled: isDev, name: "count-store" }
  )
);
