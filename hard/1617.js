/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function (n, edges) {
  const nodes = [];
  for (let i = 1; i <= n; i++) nodes[i] = { val: i, neighbours: new Set() };
  for (const [a, b] of edges) {
    nodes[a].neighbours.add(b);
    nodes[b].neighbours.add(a);
  }

  function getDistance(from, to) {
    const seen = new Set([from]);
    const queue = [[from, 0]];
    for (const [node, dist] of queue) {
      if (node === to) return dist;
      for (const neighbour of nodes[node].neighbours) {
        if (seen.has(neighbour)) continue;
        seen.add(neighbour);
        queue.push([neighbour, dist + 1]);
      }
    }
    return Infinity;
  }

  const distanceMap = Array(n + 1)
    .fill()
    .map(() => []);
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      const dist = getDistance(i, j);
      distanceMap[i][j] = dist;
      distanceMap[j][i] = dist;
    }
  }

  function isConnected(subtree, added) {
    const seen = new Set([added]);
    for (const node of seen) {
      if (seen.size === subtree.size) return true;
      for (const neighbour of nodes[node].neighbours)
        if (subtree.has(neighbour)) seen.add(neighbour);
    }
    return false;
  }

  function getAns(
    nodeVal = 1,
    subtree = new Set(),
    ans = Array(n - 1).fill(0)
  ) {
    if (nodeVal > n) return;

    // take
    subtree.add(nodeVal);
    const connected = isConnected(subtree, nodeVal);
    if (connected && subtree.size > 1) {
      let max = 1;
      for (const a of subtree)
        for (const b of subtree)
          if (a !== b) max = Math.max(max, getDistance(a, b, subtree));
      if (max < Infinity) ans[max - 1]++;
    }
    getAns(nodeVal + 1, subtree, ans);
    subtree.delete(nodeVal);

    // skip
    getAns(nodeVal + 1, subtree, ans);

    return ans;
  }

  const ans = getAns();
  return ans;
};

console.log(
  countSubgraphsForEachDiameter(4, [
    [1, 2],
    [2, 3],
    [2, 4],
  ])
);
