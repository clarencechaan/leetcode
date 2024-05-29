/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  // dp[i][j] == the max value you can get from attending `j` events starting
  // from `events[i]`
  const dp = Array(events.length)
    .fill()
    .map(() => Array(k + 1).fill(0));

  // binary search for the index of the first event available on or after `day`
  function getEventIdx(day) {
    let min = 0;
    let max = events.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (events[mid][0] >= day) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  for (let i = events.length - 1; i >= 0; i--) {
    const [, endDay, value] = events[i];
    for (let j = 1; j <= k; j++) {
      const skip = dp[i + 1]?.[j] || 0;
      const nextEventIdx = getEventIdx(endDay + 1);
      const take = value + (dp[nextEventIdx]?.[j - 1] || 0);
      dp[i][j] = Math.max(skip, take);
    }
  }

  return dp[0][k];
};

console.log(
  maxValue(
    [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 1],
    ],
    2
  )
);
