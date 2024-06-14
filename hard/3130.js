/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
  const MOD = 10 ** 9 + 7;

  dp = [
    Array(zero + 1)
      .fill()
      .map(() => []),
    Array(zero + 1)
      .fill()
      .map(() => []),
  ];

  for (let i = 1; i <= Math.min(limit, zero); i++) dp[0][i][0] = 1;
  for (let i = 1; i <= Math.min(limit, one); i++) dp[1][0][i] = 1;

  const ySums = Array(one + 1).fill(0);
  for (let x = 1; x <= zero; x++) {
    let xSum = 0;
    for (let y = 1; y <= one; y++) {
      xSum += (dp[0][x][y - 1] || 0) - (dp[0][x][y - 1 - limit] || 0);
      xSum %= MOD;
      ySums[y] += (dp[1][x - 1]?.[y] || 0) - (dp[1][x - 1 - limit]?.[y] || 0);
      ySums[y] %= MOD;
      dp[0][x][y] = ySums[y];
      dp[1][x][y] = xSum;
    }
  }

  let result = (dp[0][zero][one] + dp[1][zero][one]) % MOD;
  if (result < 0) result += MOD;
  return result;
};

console.log(numberOfStableArrays(1, 1, 2));
