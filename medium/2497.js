/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  const n = vals.length;
  const nodes = Array(n)
    .fill()
    .map((_, id) => ({ id, val: vals[id], neighbours: [] }));

  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  function getStarSum(id) {
    const node = nodes[id];
    let sum = node.val;
    let neighbourVals = node.neighbours.map(
      (neighbour) => nodes[neighbour].val
    );

    neighbourVals.sort((a, b) => (a > b ? -1 : 1));
    neighbourVals = neighbourVals.slice(0, k);

    sum += neighbourVals.reduce((sum, val) => sum + Math.max(0, val), 0);

    return sum;
  }

  let ans = -Infinity;
  for (let id = 0; id < n; id++) ans = Math.max(ans, getStarSum(id));
  return ans;
};

console.log(
  maxStarSum(
    [1, 2, 3, 4, 10, -10, -20],
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
      [3, 5],
      [3, 6],
    ],
    2
  )
);
