import { isDev } from "@/config/env";
import { BOOKMARK_COLORS } from "@/constants/profile";
import { bookmarkStorage } from "@/hooks/get-bookmarks";
import { z } from "zod";
import { create } from "zustand";
import { combine, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const collectionSchema = z.object({
  isCreateCollection: z.boolean(),
  selectedType: z.string(),
  selectedColor: z.string(),
  bookmarks: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      color: z.string(),
      items: z.array(z.string()),
    })
  ),
});

const initialState: z.infer<typeof collectionSchema> = {
  isCreateCollection: false,
  selectedType: "bookmark",
  selectedColor: BOOKMARK_COLORS[0],
  bookmarks: [],
};

export const useCollectionModal = create(
  devtools(
    subscribeWithSelector(
      immer(
        combine(initialState, set => ({
          setIsCreateCollection: (value: boolean) =>
            set(state => {
              state.isCreateCollection = value;
            }),
          setSelectedType: (type: string) =>
            set(state => {
              state.selectedType = type;
            }),
          setSelectedColor: (color: string) =>
            set(state => {
              state.selectedColor = color;
            }),
          setBookmarks: (bookmarks: z.infer<typeof collectionSchema>["bookmarks"]) =>
            set(state => {
              state.bookmarks = bookmarks;
            }),
        }))
      )
    ),
    { enabled: isDev, name: "collection-modal-store" }
  )
);

if (typeof window !== "undefined") {
  useCollectionModal.setState({ bookmarks: bookmarkStorage.folders });
}
