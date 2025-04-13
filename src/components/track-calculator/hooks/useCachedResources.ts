import { useEffect } from "react";
import {
  GOAL_PACE_STORAGE_KEY,
  GOAL_WORKOUT_PACE_STORAGE_KEY,
  TIME_PER_MILE_STORAGE_KEY,
} from "../constants/AsyncStorageKeys";
import { useDefaultUserSelectionStore } from "../state/UserSelectionStore";

/**
 * Hook for loading resources from local storage
 */
export function useCachedResources() {
  const state = useDefaultUserSelectionStore();

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    // load user selected time per mile
    const timePerMile = localStorage.getItem(TIME_PER_MILE_STORAGE_KEY);
    if (timePerMile) {
      state.setPace(timePerMile);
    }

    // load user selected distance
    const distance = localStorage.getItem(GOAL_PACE_STORAGE_KEY);
    if (distance) {
      state.setDistance(distance);
    }

    const goalPace = localStorage.getItem(GOAL_WORKOUT_PACE_STORAGE_KEY);
    if (goalPace) {
      state.setPace(goalPace);
    }
  }, []);
}
