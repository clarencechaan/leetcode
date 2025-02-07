/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const n = source.length;
  const m = original.length;

  const minCostMap = {};
  const queue = [];

  for (const char of new Set([...source, ...target, ...original, ...changed]))
    queue.push([char, char, 0]);

  const costMap = {};
  for (let i = 0; i < m; i++)
    if (!costMap[original[i]]) costMap[original[i]] = { [changed[i]]: cost[i] };
    else
      costMap[original[i]][changed[i]] = Math.min(
        cost[i],
        costMap[original[i]][changed[i]] ?? Infinity
      );

  for (const [from, to, costSoFar] of queue) {
    if ((minCostMap[from + to] ?? Infinity) <= costSoFar) continue;
    minCostMap[from + to] = costSoFar;
    for (const nextTo in costMap[to])
      queue.push([from, nextTo, costSoFar + costMap[to][nextTo]]);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const x = source[i];
    const y = target[i];
    if (minCostMap[x + y] === undefined) return -1;
    result += minCostMap[x + y];
  }
  return result;
};

console.log(
  minimumCost(
    "abcd",
    "acbe",
    ["a", "b", "c", "c", "e", "d"],
    ["b", "c", "b", "e", "b", "e"],
    [2, 5, 5, 1, 2, 20]
  )
);
