/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  let pileSums = [];
  for (const pile of piles) {
    let arr = [0];
    let sum = 0;
    for (const coin of pile) {
      sum += coin;
      arr.push(sum);
    }
    pileSums.push(arr);
  }

  let dp = [];
  for (let i = 0; i <= piles.length; i++) dp.push([]);

  let remainingCoinLength = [];
  let length = 0;
  for (let i = piles.length - 1; i >= 0; i--) {
    length += piles[i].length;
    remainingCoinLength[i] = length;
  }
  remainingCoinLength.push(0);

  function recurse(k, idx = 0) {
    if (dp[idx][k] !== undefined) return dp[idx][k];

    let max = 0;
    for (let i = idx; i < piles.length; i++)
      for (
        let j = Math.max(0, k - remainingCoinLength[i + 1]);
        j <= k && j < pileSums[i].length;
        j++
      )
        max = Math.max(max, pileSums[i][j] + recurse(k - j, i + 1));

    dp[idx][k] = max;
    return max;
  }

  let result = recurse(k);
  return result;
};

console.log(
  maxValueOfCoins(
    [[37, 88], [51, 64, 65, 20, 95, 30, 26], [9, 62, 20], [44]],
    9
  )
);
