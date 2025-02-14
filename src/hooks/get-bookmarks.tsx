/* eslint-disable no-console */
type Folder = {
  id: string;
  name: string;
  color: string;
  items: string[];
};

type NewFolderType = Omit<Folder, "id" | "items">;

const isServer = typeof window === "undefined";

const getLocalStorage = () => {
  if (isServer) return null;
  try {
    return window.localStorage;
  } catch (e) {
    console.warn("localStorage is not available:", e);
    return null;
  }
};

const folders = (): Folder[] => {
  const storage = getLocalStorage();
  if (!storage) return [];

  try {
    return JSON.parse(storage.getItem("bookmarks") || "[]") as Folder[];
  } catch (e) {
    console.error("Error parsing bookmarks:", e);
    return [];
  }
};

const saveFolders = (fldrs: Folder[]): boolean => {
  const storage = getLocalStorage();
  if (!storage) return false;

  try {
    storage.setItem("bookmarks", JSON.stringify(fldrs));
    return true;
  } catch (e) {
    console.error("Error saving bookmarks:", e);
    return false;
  }
};

function createFolder(data: NewFolderType): Folder[] | undefined {
  if (!data.name || folders().some(f => f.name === data.name)) return undefined;

  const newFolder = {
    ...data,
    id: `bookmark-${Math.random().toString(36).substring(2, 9)}`,
    items: [],
  };

  const updatedFolders = [...folders(), newFolder];
  saveFolders(updatedFolders);
  return updatedFolders;
}

const editFolder = ({ id, data }: { id: string; data: NewFolderType }): Folder[] => {
  const updates = folders().map(f => (f.id === id ? { ...f, ...data } : f));
  saveFolders(updates);
  return updates;
};

const updateBookmarks = ({ value, folderIds }: { value: string; folderIds: string[] }): Folder[] => {
  const updates = folders().map(f => {
    const values = f.items.filter(item => item !== value);
    return {
      ...f,
      items: folderIds.includes(f.id) ? [...values, value] : values,
    };
  });
  saveFolders(updates);
  return updates;
};

const findOne = ({ id }: { id: string }): Folder | undefined => {
  return folders().find(folder => folder.id === id);
};

const removeItems = ({ folderId, itemIndex }: { folderId: string; itemIndex?: number }): void => {
  const updatedFolders = folders().map(folder => {
    if (folder.id !== folderId) return folder;
    const updatedItems = itemIndex !== undefined ? folder.items.filter((_, index) => index !== itemIndex) : [];
    return { ...folder, items: updatedItems };
  });
  saveFolders(updatedFolders);
};

const deleteFolder = ({ id }: { id: string }): Folder[] => {
  const updates = folders().filter(folder => folder.id !== id);
  saveFolders(updates);
  return updates;
};

export const bookmarkStorage = {
  folders: folders(),
  findOne,
  create: createFolder,
  edit: editFolder,
  save: saveFolders,
  update: updateBookmarks,
  deleteFolder,
  removeItems,
};
