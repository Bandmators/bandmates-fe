import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Action = {
  setIsOpen: (isOpen: boolean) => void;
};

export const useSidebarStore = create<State & Action>(set => ({
  isOpen: true,
  setIsOpen: isOpen => set(() => ({ isOpen })),
}));
