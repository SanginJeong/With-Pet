import { create } from 'zustand';

export const useModalStore = create((set) => ({
  modals: {
    login: false,
    contentType: false,
    service: false,
    region: false,
  },
  openModal: (type) => set((state) => ({ modals: { ...state.modals, [type]: true } })),
  closeModal: (type) => set((state) => ({ modals: { ...state.modals, [type]: false } })),
}));
