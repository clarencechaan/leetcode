/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = [];

  function recurse(idx = 0) {
    if (idx === -1 || idx === days.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
    let nextIdx1 = idx + 1;
    let nextIdx7 = days.findIndex((day) => day >= days[idx] + 7);
    let nextIdx30 = days.findIndex((day) => day >= days[idx] + 30);

    let result = Math.min(
      costs[0] + recurse(nextIdx1),
      costs[1] + recurse(nextIdx7),
      costs[2] + recurse(nextIdx30)
    );

    dp[idx] = result;
    return result;
  }

  return recurse();
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
