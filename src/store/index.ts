import { create } from 'zustand';

import { StoreInterface } from './models/StoreInterface';

const useStore = create<StoreInterface>((set) => ({
  name: '',
  setName: (newName: string) => set({ name: newName }),
}));

export default useStore;
