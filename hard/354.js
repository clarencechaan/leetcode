/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes = envelopes
    .sort((a, b) => (a[0] > b[0] || (a[0] === b[0] && a[1] < b[1]) ? 1 : -1))
    .map(([, h]) => h);

  // returns the first element in `dp` that is >= `num`
  function binarySearch(num) {
    let min = 1;
    let max = dp.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (dp[mid] >= num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  const dp = [0];
  for (const num of envelopes) {
    const idx = binarySearch(num);
    dp[idx] = num;
  }

  return dp.length - 1;
};

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
);
