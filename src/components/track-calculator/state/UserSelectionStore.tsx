import { create } from "zustand";

export interface UserSelectionStore {
  distance: string;
  pace: number;
  setDistance: (fas: string) => void;
  setPace: (fas: string | number) => void;
}

/**
 * Hook for the selections the user has made
 */
export const useDefaultUserSelectionStore = create<UserSelectionStore>(
  (set) => ({
    // default is 1 mile
    distance: "1 mi",
    // default is 8 minutes / mile
    pace: 480,
    setDistance: (newValue: string) => set(() => ({ distance: newValue })),
    setPace: (newValue: string) => set(() => ({ pace: Number(newValue) })),
  })
);
