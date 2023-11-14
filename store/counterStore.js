import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useCounterStore = create(
    immer((set) => ({
        count: 0,
        increment: (value = 1) => {
            set((state) => {
                state.count += value;
            });
        },
    }))
);

const selectCount = (state) => state.count;
const selectIncrement = (state) => state.increment;

export { useCounterStore, selectCount, selectIncrement };
