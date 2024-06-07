/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function (stones) {
  const n = stones.length;

  const sums = [];
  for (let i = 0; i < n; i++) sums[i] = (sums[i - 1] || 0) + stones[i];

  const dp = [[], []];
  dp[0][n - 2] = sums[n - 1];
  dp[1][n - 2] = -sums[n - 1];

  for (let i = n - 3; i >= 0; i--) {
    dp[0][i] = Math.max(dp[0][i + 1], sums[i + 1] + dp[1][i + 1]);
    dp[1][i] = Math.min(dp[1][i + 1], -sums[i + 1] + dp[0][i + 1]);
  }

  return dp[0][0];
};

console.log(stoneGameVIII([-1, 2, -3, 4, -5]));

// recursive solution:

// var stoneGameVIII = function (stones) {
//   const n = stones.length;

//   const sums = [];
//   for (let i = 0; i < n; i++) sums[i] = (sums[i - 1] || 0) + stones[i];

//   const dp = [[], []];
//   function recursion(idx = 0, turn = 0) {
//     if (idx === n - 2) return (turn === 0 ? 1 : -1) * sums[n - 1];
//     if (dp[turn][idx] !== undefined) return dp[turn][idx];

//     const take =
//       (turn === 0 ? 1 : -1) * sums[idx + 1] +
//       recursion(idx + 1, (turn + 1) % 2);
//     const skip = recursion(idx + 1, turn);

//     let result;
//     if (turn === 0) result = Math.max(skip, take);
//     else result = Math.min(skip, take);

//     dp[turn][idx] = result;
//     return result;
//   }

//   return recursion();
// };
