/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const n = locations.length;
  const MOD = 10 ** 9 + 7;

  const dp = Array(n)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => [])
    );
  function recursion(start, finish, fuel) {
    if (fuel < 0) return 0;
    if (dp[start][finish][fuel] >= 0) return dp[start][finish][fuel];
    let result = 0;
    if (start === finish) result++;
    for (let i = 0; i < locations.length; i++)
      if (start !== i)
        result += recursion(
          i,
          finish,
          fuel - Math.abs(locations[start] - locations[i])
        );
    result %= MOD;
    dp[start][finish][fuel] = result;
    return result;
  }

  return recursion(start, finish, fuel);
};

console.log(countRoutes([2, 3, 6, 8, 4], 1, 3, 5));
