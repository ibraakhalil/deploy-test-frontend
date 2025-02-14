import { isDev } from "@/config/env";
import { setCSSVariables } from "@/utils/css";
import { z } from "zod";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const audioSettings = z.object({
  showAudioBar: z.boolean(),
});

const initialState: z.infer<typeof audioSettings> = {
  showAudioBar: false,
};

export const useAudioSettings = create(
  devtools(
    immer(
      combine(initialState, set => ({
        setShowAudioBar: (boolean: boolean) =>
          set(state => {
            setCSSVariables(boolean ? { "--bottom-bar-size": "60px" } : { "--bottom-bar-size": "0px" });
            state.showAudioBar = boolean;
          }),
        resetToDefaults: () => set(initialState),
      }))
    ),
    { enabled: isDev, name: "audio-settings-store" }
  )
);
