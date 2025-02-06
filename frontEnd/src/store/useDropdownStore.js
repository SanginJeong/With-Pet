import { create } from "zustand";

export const useDropdownStore = create((set)=>({
  navMenu : {
    isOpen : false,
    handleMouseOver : () => set((state)=>({navMenu : {...state.navMenu, isOpen: true}})),
    handleMouseLeave : () => set((state)=>({navMenu : {...state.navMenu, isOpen: false}})),
  }
}))