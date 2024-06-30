/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const n = patience.length;
  const nodes = [];
  for (let i = 0; i < n; i++)
    nodes[i] = {
      val: i,
      neighbours: [],
      distanceFromMaster: Infinity,
      pat: patience[i],
    };

  for (const [u, v] of edges) {
    nodes[u].neighbours.push(v);
    nodes[v].neighbours.push(u);
  }

  const seen = new Set([0]);
  const queue = [[0, 0]];
  for (const [node, cost] of queue) {
    if (cost >= nodes[node].distanceFromMaster) continue;
    nodes[node].distanceFromMaster = cost;
    for (const neighbour of nodes[node].neighbours)
      if (!seen.has(neighbour)) {
        seen.add(neighbour);
        queue.push([neighbour, cost + 1]);
      }
  }

  function getTimeUntilIdle(node) {
    const timeUntilResponseReceived = nodes[node].distanceFromMaster * 2;
    const numOfResends = Math.floor(
      (timeUntilResponseReceived - 1) / nodes[node].pat
    );
    const timeOfLastResend = numOfResends * nodes[node].pat;
    return timeOfLastResend + timeUntilResponseReceived + 1;
  }

  let ans = 0;
  for (let i = 1; i < n; i++) ans = Math.max(ans, getTimeUntilIdle(i));
  return ans;
};

console.log(
  networkBecomesIdle(
    [
      [0, 1],
      [1, 2],
    ],
    [0, 2, 1]
  )
);
