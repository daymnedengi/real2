import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useMenuStore = create(
    immer((set) => ({
        showMenu: false,
        toggleMenu: (value) => {
            set((state) => {
                state.showMenu = value;
            });
        },
    }))
);

const selectShowMenu = (state) => state.showMenu;
const selectToggleMenu = (state) => state.toggleMenu;

export { useMenuStore, selectShowMenu, selectToggleMenu };
