/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let poisoned = [];
  for (const time of timeSeries) poisoned.push([time, time + duration - 1]);

  for (let i = 0; i < poisoned.length - 1; i++) {
    if (poisoned[i + 1][0] <= poisoned[i][1]) {
      poisoned[i] = [poisoned[i][0], poisoned[i + 1][1]];
      poisoned = [...poisoned.slice(0, i + 1), ...poisoned.slice(i + 2)];
      i--;
    }
  }

  return poisoned.reduce(
    (total, duration) => duration[1] - duration[0] + 1 + total,
    0
  );
};

console.log(findPoisonedDuration([1, 4], 2));
