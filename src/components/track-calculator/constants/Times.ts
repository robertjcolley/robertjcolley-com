// create an array with a number representing the number of seconds
// every 5 seconds starting at 3 minutes (180 seconds) and ending at 30 minutes (1800 seconds)
export const TIMES: number[] = [];
for (let i = 180; i <= 1800; i += 5) {
  TIMES.push(i);
}
