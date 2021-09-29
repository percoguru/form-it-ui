import create, { UseStore } from "zustand";
import { Store } from "../types/types";

const useStore: UseStore<Store> = create((set, get): Store => ({
  numberOfFields: 0,
  addField: () => set((state: Store) => ({
    numberOfFields: state.numberOfFields + 1,
  })),
  removeField: () => {
    if(get().numberOfFields === 0) return 
    set({ numberOfFields: get().numberOfFields - 1})
  },
}));

export default useStore;
