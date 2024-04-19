/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  // we can use bfs to find the minimum time, but to find the second minimum
  // time, we have to slightly modify it; keep track of the two lowest times
  // for each node. for each `[node, currTime]` in the `queue`, we skip if the
  // `currTime` is the third minimum since we only care about the first two
  // minimums

  // create the graph
  const graph = [];
  for (let i = 1; i <= n; i++) graph[i] = { val: i, neighbours: [] };
  for (const [a, b] of edges) {
    graph[a].neighbours.push(b);
    graph[b].neighbours.push(a);
  }

  function getGreenTime(currTime) {
    if (Math.floor(currTime / change) % 2 === 0) return currTime;
    return Math.floor(currTime / change) * change + change;
  }

  // `minTime[node]` == the two minimum times to reach `node`
  const minTime = Array(n + 1)
    .fill()
    .map(() => []);

  const queue = [[1, 0]];

  for (const [node, currTime] of queue) {
    if (minTime[node][1] || minTime[node][0] === currTime) continue;

    minTime[node].push(currTime);
    const nextTime = getGreenTime(currTime) + time;

    for (const neighbour of graph[node].neighbours)
      queue.push([neighbour, nextTime]);
  }

  if (minTime[n][1]) return minTime[n][1];
};

console.log(
  secondMinimum(
    5,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 4],
      [4, 5],
    ],
    3,
    5
  )
);
