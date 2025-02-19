/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  function getCloser(cost1, cost2) {
    const diff1 = Math.abs(target - cost1);
    const diff2 = Math.abs(target - cost2);
    if (diff1 < diff2 || (diff1 === diff2 && cost1 < cost2)) return cost1;
    return cost2;
  }

  function recursiveClosestCost(cost, tIdx = 0) {
    if (tIdx >= toppingCosts.length) return cost;

    const add0 = recursiveClosestCost(cost, tIdx + 1);
    const add1 = recursiveClosestCost(cost + toppingCosts[tIdx], tIdx + 1);
    const add2 = recursiveClosestCost(cost + toppingCosts[tIdx] * 2, tIdx + 1);

    let closest = add0;
    closest = getCloser(closest, add1);
    closest = getCloser(closest, add2);
    return closest;
  }

  let closest = Infinity;
  for (const b of baseCosts)
    closest = getCloser(closest, recursiveClosestCost(b));
  return closest;
};
