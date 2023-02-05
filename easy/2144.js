/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => (a > b ? -1 : 1));

  let result = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 === 0) continue;
    result += cost[i];
  }

  return result;
};

console.log(minimumCost([5, 5]));
