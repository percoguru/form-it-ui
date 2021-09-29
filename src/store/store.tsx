import create from "zustand";
import { Store } from "../types/types";

const useStore = create((set) => ({
  numberOfFields: 0,
  addField: () => set((state: Store) => ({
    numberOfFields: state.numberOfFields + 1,
  })),
  removeField: () => set((state: Store) => {
    if(state.numberOfFields === 0) return 
    return { numberOfFields: state.numberOfFields - 1}
  })
}));

export default useStore;
