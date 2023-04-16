/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let jobs = [];
  for (let i = 0; i < difficulty.length; i++)
    jobs.push([difficulty[i], profit[i]]);
  jobs.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  let filteredJobs = [];
  let max = -1;
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i][1] > max) {
      max = jobs[i][1];
      filteredJobs.push(jobs[i]);
    }
  }

  function binarySearchMaxProfit(diff) {
    let min = -1;
    let max = filteredJobs.length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max && filteredJobs[mid][0] !== diff) {
      if (diff < filteredJobs[mid][0]) max = mid - 1;
      else if (filteredJobs[mid][0] < diff) min = mid;
      else break;
      mid = Math.ceil((min + max) / 2);
    }
    return filteredJobs[mid]?.[1] || 0;
  }

  let result = 0;
  for (const ability of worker) result += binarySearchMaxProfit(ability);
  return result;
};

console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);
