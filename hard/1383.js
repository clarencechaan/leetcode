/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function (n, speed, efficiency, k) {
  const engineers = [];
  for (let i = 0; i < n; i++)
    engineers.push({ sp: speed[i], ef: efficiency[i] });
  engineers.sort((a, b) => (a.ef > b.ef ? 1 : -1));

  function getIndex(arr, num) {
    // binary search
    let min = 0;
    let max = arr.length;
    let idx = Math.floor((min + max) / 2);
    while (min < max) {
      if (arr[idx] > num) min = idx + 1;
      else max = idx;
      idx = Math.floor((min + max) / 2);
    }
    return idx;
  }

  const maxSum = [];
  const team = [];
  let sum = 0n;
  for (let idx = n - 1; idx >= 0; idx--) {
    const sp = engineers[idx].sp;
    if (team.length < k || team[team.length - 1] < sp) {
      sum += BigInt(sp);
      const insertIdx = getIndex(team, sp);
      team.splice(insertIdx, 0, sp);
      if (team.length > k) sum -= BigInt(team.pop());
    }
    maxSum[idx] = sum;
  }

  // for each `idx` we know the maximum speed sum of a team starting from that index
  // => we know that the minimum efficiency among the team in our function call is `engineers[idx].ef`
  // => we can thus calculate the max performance

  let result = 0n;
  for (let idx = 0; idx < n; idx++) {
    const speedSum = maxSum[idx];
    const ef = BigInt(engineers[idx].ef);
    const performance = speedSum * ef;
    if (performance > result) result = performance;
  }
  result %= 10n ** 9n + 7n;

  return Number(result);
};

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2));
