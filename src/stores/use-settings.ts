/* eslint-disable react-func/max-lines-per-function */
import { isDev } from "@/config/env";
import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState = {
  arabicFontFace: "",
  translationFontFace: "",
  arabicFontSize: 28,
  translationFontSize: 17,
  translators: ["en_sahih"],
  tafsirs: ["en_kathir"],
  activeTafsir: "en_kathir",
  isWBW: false,
  activeState: "tab",
};

export const useSettings = create(
  devtools(
    persist(
      immer(
        combine(initialState, set => ({
          setArabicFontFace: (face: string) =>
            set(state => {
              state.arabicFontFace = face;
            }),
          setTranslationFontFace: (face: string) =>
            set(state => {
              state.translationFontFace = face;
            }),
          setArabicFontSize: (size: number) =>
            set(state => {
              state.arabicFontSize = size;
            }),
          setTranslationFontSize: (size: number) =>
            set(state => {
              state.translationFontSize = size;
            }),
          setTranslators: (translators: string[]) =>
            set(state => {
              state.translators = translators;
            }),
          setTafsirs: (tafsirs: string[]) =>
            set(state => {
              state.tafsirs = tafsirs;
            }),
          setActiveTafsir: (value: string) =>
            set(state => {
              state.activeTafsir = value;
            }),
          setIsWBW: (isWBW: boolean) =>
            set(state => {
              state.isWBW = isWBW;
            }),
          setActiveState: (state: string) => set({ activeState: state }),
          resetToDefaults: () => set(initialState),
        }))
      ),
      {
        name: "settings",
        partialize: state => Object.fromEntries(Object.entries(state).filter(([key]) => key !== "activeState")),
      }
    ),
    { enabled: isDev, name: "font-settings-store" }
  )
);
