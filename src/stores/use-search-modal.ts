/* eslint-disable react-func/max-lines-per-function */
import { isDev } from "@/config/env";
import { z } from "zod";
import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const searchSchema = z.object({
  searchValue: z.string(),
  searchIn: z.string(),
  searchType: z.string(),
  selectedBook: z.string(),
  selectedTafsir: z.string(),
  selectedTranslations: z.string().array(),
});

const searchModalSchema = z.object({
  ...searchSchema.shape,
  recentNavigations: z.array(searchSchema),
  showOptions: z.boolean().optional(),
});

const initialState: z.infer<typeof searchModalSchema> = {
  searchValue: "",
  searchIn: "translations",
  searchType: "partial",
  selectedTranslations: ["en_sahih"],
  selectedTafsir: "en_kathir",
  selectedBook: "",
  recentNavigations: [],
  showOptions: false,
};

export const useSearchModal = create(
  devtools(
    persist(
      immer(
        combine(initialState, set => ({
          setSearchValue: (value: string) =>
            set(state => {
              state.searchValue = value;
            }),
          setSearchIn: (searchIn: string) =>
            set(state => {
              state.searchIn = searchIn;
            }),
          setSearchType: (type: string) =>
            set(state => {
              state.searchType = type;
            }),
          setSelectedTranslations: (values: string[]) =>
            set(state => {
              state.selectedTranslations = values;
            }),
          setSelectedTafsir: (tafsir: string) =>
            set(state => {
              state.selectedTafsir = tafsir;
            }),
          setSelectedBook: (book: string) =>
            set(state => {
              state.selectedBook = book;
            }),
          setRecentNavigations: (navigation: z.infer<typeof searchSchema>) =>
            set(state => {
              state.recentNavigations.push(navigation);
            }),
          setShowOptions: (showOptions: boolean) =>
            set(state => {
              state.showOptions = showOptions;
            }),
        }))
      ),
      {
        name: "search-modal",
        partialize: state => ({ recentNavigations: state.recentNavigations }),
      }
    ),
    { enabled: isDev, name: "search-modal-store" }
  )
);
