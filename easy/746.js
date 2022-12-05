/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let runningCost = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++)
    runningCost.push(
      Math.min(runningCost[i - 2], runningCost[i - 1]) + cost[i]
    );

  return Math.min(
    runningCost[runningCost.length - 1],
    runningCost[runningCost.length - 2]
  );
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
