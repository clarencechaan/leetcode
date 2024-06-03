/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;

  const jobs = [];
  for (let i = 0; i < n; i++) jobs.push([startTime[i], endTime[i], profit[i]]);

  jobs.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  function binarySearch(time) {
    let min = 0;
    let max = n;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (jobs[mid][0] >= time) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  const dp = [];
  function recursion(idx = 0) {
    if (idx >= n) return 0;
    if (dp[idx] >= 0) return dp[idx];

    const [, e, p] = jobs[idx];
    const nextIdx = binarySearch(e);
    const take = p + recursion(nextIdx);
    const skip = recursion(idx + 1);

    const result = Math.max(take, skip);
    dp[idx] = result;
    return result;
  }

  return recursion();
};

console.log(
  jobScheduling(
    (startTime = [1, 2, 3, 3]),
    (endTime = [3, 4, 5, 6]),
    (profit = [50, 10, 40, 70])
  )
);
