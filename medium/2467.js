/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  let edgeMap = {};
  for (const [a, b] of edges) {
    if (!edgeMap[a]) edgeMap[a] = [b];
    else edgeMap[a].push(b);
    if (!edgeMap[b]) edgeMap[b] = [a];
    else edgeMap[b].push(a);
  }

  let depths = [];
  function getDepths(node = 0, prev = null, depth = 0) {
    depths[node] = depth;
    for (const next of edgeMap[node])
      if (next !== prev) getDepths(next, node, depth + 1);
  }

  getDepths();

  let bobNodeTurns = {};
  function getBobNodeTurns(node = bob, turn = 0) {
    bobNodeTurns[node] = turn;
    if (node === 0) return;
    let next = edgeMap[node].find((next) => depths[next] < depths[node]);
    getBobNodeTurns(next, turn + 1);
  }

  getBobNodeTurns();

  function maxProfit(node = 0, turn = 0) {
    let reward = 0;
    if (bobNodeTurns[node] === undefined || bobNodeTurns[node] > turn)
      reward = amount[node];
    else if (bobNodeTurns[node] === turn) reward = amount[node] / 2;

    let max = -Infinity;
    let next = edgeMap[node].filter((next) => depths[next] > depths[node]);
    if (!next.length) max = 0;
    else for (const n of next) max = Math.max(max, maxProfit(n, turn + 1));

    return reward + max;
  }

  return maxProfit();
};

console.log(
  mostProfitablePath(
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    3,
    [-2, 4, 2, -4, 6]
  )
);
