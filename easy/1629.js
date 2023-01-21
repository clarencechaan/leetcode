/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let durations = releaseTimes.map(
    (time, idx) => time - (releaseTimes[idx - 1] || 0)
  );

  durations = durations.map((duration, idx) => ({
    duration,
    letter: keysPressed[idx],
  }));

  durations.sort((a, b) =>
    a.duration > b.duration
      ? -1
      : a.duration === b.duration && a.letter > b.letter
      ? -1
      : 1
  );

  return durations[0].letter;
};

console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
