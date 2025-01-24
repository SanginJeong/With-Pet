import {create} from 'zustand';

export const useModalStore = create((set) => ({
  login: {
    isOpen: false,
    closeModal: () => set((state) => ({ login: { ...state.login, isOpen: false } })),
    openModal: () => set((state) => ({ login: { ...state.login, isOpen: true } })),
  }
}));
