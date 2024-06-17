/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  const nodes = [];

  for (let i = 0; i < n; i++)
    nodes[i] = { node: i, p: price[i], neighbours: [], children: [] };

  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  (function markDepths(node = 0, depth = 0, seen = new Set()) {
    seen.add(node);
    nodes[node].depth = depth;
    for (const neighbour of nodes[node].neighbours) {
      if (!seen.has(neighbour)) {
        markDepths(neighbour, depth + 1, seen);
        nodes[neighbour].parent = node;
        nodes[node].children.push(neighbour);
      }
    }
  })();

  nodes.forEach((node) => delete node.neighbours);

  function getTripNodes(start, end) {
    let nodeS = nodes[start];
    let nodeE = nodes[end];

    const tripNodes = new Set([start, end]);

    while (nodeS.depth > nodeE.depth) {
      nodeS = nodes[nodeS.parent];
      tripNodes.add(nodeS.node);
    }

    while (nodeE.depth > nodeS.depth) {
      nodeE = nodes[nodeE.parent];
      tripNodes.add(nodeE.node);
    }

    while (nodeS !== nodeE) {
      nodeS = nodes[nodeS.parent];
      nodeE = nodes[nodeE.parent];
      tripNodes.add(nodeS.node).add(nodeE.node);
    }

    return tripNodes;
  }

  function getNodeFreq() {
    const freq = Array(n).fill(0);
    for (const [start, end] of trips) {
      const set = getTripNodes(start, end);
      for (const node of set) freq[node]++;
    }

    return freq;
  }

  const nodeFreq = getNodeFreq();
  for (let node = 0; node < n; node++) nodes[node].f = nodeFreq[node];

  const dp = [[], []];
  function getMinTotal(node = 0, canHalve = 1) {
    if (dp[canHalve][node] >= 0) return dp[canHalve][node];

    const nodeObj = nodes[node];
    const fullPrice = nodeObj.p * nodeObj.f;

    const takeFull =
      fullPrice +
      nodeObj.children.reduce((sum, child) => sum + getMinTotal(child, 1), 0);

    const takeHalf = canHalve
      ? fullPrice / 2 +
        nodeObj.children.reduce((sum, child) => sum + getMinTotal(child, 0), 0)
      : Infinity;

    const result = Math.min(takeFull, takeHalf);
    dp[canHalve][node] = result;
    return result;
  }

  return getMinTotal();
};

console.log(
  minimumTotalPrice(
    4,
    [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
    [2, 2, 10, 6],
    [
      [0, 3],
      [2, 1],
      [2, 3],
    ]
  )
);
