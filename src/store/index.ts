import { create } from 'zustand';

const useStore = create((set) => ({
  name: '',
  setName: (newName: string) => set({ name: newName }),
}));

export default useStore;
