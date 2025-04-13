import { ChangeEvent, CSSProperties, FC, useState } from "react";
import {
  GOAL_PACE_STORAGE_KEY,
  TIME_PER_MILE_STORAGE_KEY,
} from "./constants/AsyncStorageKeys";
import { useDefaultUserSelectionStore } from "./state/UserSelectionStore";
import { TIMES } from "./constants/Times";
import { DISTANCES } from "./constants/Distances";
import { useCachedResources } from "./hooks/useCachedResources";

// find the max name length for padding strings for readability
let maxNameLength = 0;
for (let item of DISTANCES) {
  if (item.name.length > maxNameLength) {
    maxNameLength = item.name.length;
  }
}

/**
 * # Track Calculator
 *
 * ## What
 *
 * Main calculator screen to turn common mile pace into how long per track distance.
 * For example, calculating that if you want to run 1200m at an 8:00 minute per mile pace,
 * you would need to run a 5:57 minute 1200.
 *
 * ## Why
 *
 * At track, I have no idea how fast to run. I have been doing it based on feel, and I want
 * a better way of knowing how fast to be running.
 *
 * ## How
 *
 * Store each of the distances in terms of meters and calculate from mile pace with:
 *
 * ```text
 * ( X minutes * 1 mile / 1609 meters ) = ( Y minutes / D meters )
 * ```
 * @returns {FC} React component
 */
export const TrackCalculator: FC = () => {
  // by the time we get to rendering this screen, the values here will have been
  // fetched and the state will reflect the last values the user was looking at.
  const { distance, pace, setDistance, setPace } =
    useDefaultUserSelectionStore();
  useCachedResources();

  // selected pace corresponds to minutes per mile.
  // calculate the minutes per mile the user chooses.
  const timePerMeter = pace / 1609;
  const { meters, name } = DISTANCES.find((item) => item.name === distance);
  const calculatedTimeInSeconds = Math.floor(timePerMeter * meters);
  let hours = Math.floor(calculatedTimeInSeconds / 3600).toString();
  let minutes = Math.floor((calculatedTimeInSeconds % 3600) / 60).toString();
  const seconds = (calculatedTimeInSeconds % 60).toString().padStart(2, "0");

  if (calculatedTimeInSeconds >= 3600) {
    // only add leading zeros to minutes if over an hour
    minutes = minutes.padStart(2, "0");
    // only add hours and colon if over an hour
    hours = hours + ":";
  } else {
    // don't show hours if less than 1 hour
    hours = "";
  }

  const calculatedTime = `${hours}${minutes}:${seconds}`;

  /**
   * Event handler for changing the minutes per mile
   *
   * @param {ChangeEvent<HTMLSelectElement>} event change event from user selecting a pace
   */
  const handleChangePace = (e: ChangeEvent<HTMLSelectElement>) => {
    const newPace = parseInt(e.target.value);
    setPace(newPace);
    localStorage.setItem(TIME_PER_MILE_STORAGE_KEY, newPace.toString());
  };

  /**
   * Event handler for the user changing the selected distance
   *
   * @param
   */
  const handleChangeDistance = (e: ChangeEvent<HTMLSelectElement>) => {
    const newDistance = e.target.value;
    setDistance(newDistance);
    localStorage.setItem(GOAL_PACE_STORAGE_KEY, newDistance);
  };

  /**
   * Converts meters per second to minutes per mile.
   *
   * @param pace minutes per meter pace
   * @returns string converted to minutes per mile
   */
  const convertMetersPerSecondToMinutesPerMileString = (pace: number) =>
    `${Math.floor(pace / 60)}:${(pace % 60)
      .toString()
      .padStart(2, "0")} per mile`;

  return (
    <div>
      <h2>Pace (minutes/mile)</h2>
      <select
        name="timePerMile"
        onChange={handleChangePace}
        value={pace}
        style={{ marginBottom: 32 }}
      >
        {TIMES.map((item) => (
          <option key={item + "-pace"} value={item}>
            {convertMetersPerSecondToMinutesPerMileString(item)}
          </option>
        ))}
      </select>
      <h2>Distance</h2>
      <select
        name="distance"
        value={distance}
        onChange={handleChangeDistance}
        style={{ marginBottom: 32 }}
      >
        {DISTANCES.map((item) => {
          return (
            <option
              value={item.name}
              key={item.name + "-distance"}
            >{`${item.name}`}</option>
          );
        })}
      </select>
      <h2>Calculated Time</h2>
      <b style={{ fontSize: "4rem" }}>{calculatedTime}</b>
      <p>
        Running a <b>{name}</b> at{" "}
        <b>{convertMetersPerSecondToMinutesPerMileString(pace)}</b> would take{" "}
        <b>{calculatedTime}</b>.
      </p>
    </div>
  );
};
