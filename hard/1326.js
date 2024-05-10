/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  // minArr[i] === the minimum number of taps to water garden in range [0, i]
  const minArr = [];

  for (let i = 0; i <= n; i++) {
    if (i - ranges[i] > minArr.length) continue;

    const taps = (minArr[i - ranges[i] - 1] || 0) + 1;

    for (let j = Math.max(0, i - ranges[i]); j < i + ranges[i] && j < n; j++)
      minArr[j] = Math.min(minArr[j] || Infinity, taps);
  }

  return minArr[n - 1] || -1;
};

console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
