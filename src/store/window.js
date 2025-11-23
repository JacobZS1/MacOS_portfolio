import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

// Windows that must always stay on top of others
const ALWAYS_ON_TOP = new Set(["txtfile", "imgfile"]);
// Large offset to guarantee the z-index of top windows is higher than any normal window
const TOP_Z_OFFSET = 100000; // sufficiently large to avoid being reached by normal windows

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) =>
            set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = true;
            // Always-on-top windows get a z-index in a higher tier
            win.zIndex = (ALWAYS_ON_TOP.has(windowKey) ? TOP_Z_OFFSET : 0) + state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),

        closeWindow: (windowKey) =>
            set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),

        focusWindow: (windowKey) =>
            set((state) => {
            const win = state.windows[windowKey];
            // Keep top windows in their higher tier when focused
            win.zIndex = (ALWAYS_ON_TOP.has(windowKey) ? TOP_Z_OFFSET : 0) + state.nextZIndex++;
        }),
    })),
);

export default useWindowStore;