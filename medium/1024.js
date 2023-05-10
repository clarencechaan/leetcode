/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  clips.sort((a, b) => (a[0] > b[0] || (a[0] === b[0] && a[1] > b) ? 1 : -1));

  let dp = [];

  function recurse(idx = 0, start = 0) {
    if (start >= time) return 0;
    if (dp[start] !== undefined) return dp[start];
    let min = Infinity;
    for (let i = idx; i < clips.length; i++)
      if (clips[i][0] > start) break;
      else min = Math.min(min, 1 + recurse(i + 1, clips[i][1]));
    dp[start] = min;
    return min;
  }

  let result = recurse();
  return result === Infinity ? -1 : result;
};

console.log(
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ],
    10
  )
);
