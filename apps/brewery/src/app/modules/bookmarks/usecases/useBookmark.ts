import create from 'zustand';
import { persist } from 'zustand/middleware';

interface BookmarkState {
  bookmarks: number;
  addABookmark: () => void;
}

const useBookmark = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarks: 0,
      addABookmark: () => set({ bookmarks: get().bookmarks + 1 }),
    }),
    {
      name: 'bookmarks-storage',
      getStorage: () => sessionStorage,
    }
  )
);

export default useBookmark;
