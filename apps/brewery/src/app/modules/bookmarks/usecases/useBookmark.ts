import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BookmarkState {
  bookmarkCount: number;
  bookmarkList: [];
  addBookmark: (item: any) => void;
  removeBookmark: (id: string) => void;
  setBookmarkCount: () => void;
  errorMessage: string;
}

export const useBookmark = create<BookmarkState>()(
  // Note : Actually I can use map or set here to prevent duplicate value addition, and then I realize...
  // ...that the persist method is using JSON.stringify so that it complicates things with Map or Set
  persist(
    (set, get) => ({
      // initial state
      bookmarkCount: 0,
      bookmarkList: [],
      // methods for manipulating state
      addBookmark: (item: any) => {
        if (!get().bookmarkList.some((bookmark) => bookmark.id === item.id)) {
          set((state) => ({
            bookmarkList: [...state.bookmarkList, item],
            errorMessage: '',
          }));
        } else {
          set({ errorMessage: 'Item has already been bookmarked' });
        }
      },
      removeBookmark: (id) => {
        set((state) => ({
          bookmarkList: state.bookmarkList.filter(
            (bookmark) => bookmark.id !== id
          ),
        }));
      },
      setBookmarkCount: () => set({ bookmarkCount: get().bookmarkList.length }),
      errorMessage: '',
    }),
    {
      name: 'bookmarks-storage',
      getStorage: () => AsyncStorage,
    }
  )
);
