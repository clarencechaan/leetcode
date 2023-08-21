/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let direct = {};
  for (let i = 0; i < n; i++) direct[i] = new Set();
  for (const [from, to] of roads) {
    direct[from].add(to);
    direct[to].add(from);
  }

  let maxNetworkRank = 0;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      let networkRank = direct[i].size + direct[j].size;
      if (direct[i].has(j)) networkRank--;
      maxNetworkRank = Math.max(maxNetworkRank, networkRank);
    }

  return maxNetworkRank;
};

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ])
);
