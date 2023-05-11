/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let optimal = [];
  for (const cost of costs) {
    if (cost[0] < cost[1]) optimal.push(0);
    else optimal.push(1);
  }

  let counts = [0, 0];
  for (const val of optimal) counts[val]++;

  if (counts[0] !== counts[1]) {
    let sorted = [];
    for (let i = 0; i < optimal.length; i++)
      if (
        (optimal[i] === 1 && counts[0] < counts[1]) ||
        (optimal[i] === 0 && counts[0] > counts[1])
      )
        sorted.push(i);
    sorted.sort((a, b) =>
      Math.abs(costs[a][0] - costs[a][1]) > Math.abs(costs[b][0] - costs[b][1])
        ? 1
        : -1
    );
    for (let i = 0; i < Math.abs(counts[1] - counts[0]) / 2; i++)
      optimal[sorted[i]] = optimal[sorted[i]] ? 0 : 1;
  }

  let total = 0;
  for (let i = 0; i < costs.length; i++) total += costs[i][optimal[i]];
  return total;
};

console.log(
  twoCitySchedCost([
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42],
  ])
);
