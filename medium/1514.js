/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  // create the graph
  const graph = [];
  for (let i = 0; i < n; i++) graph[i] = { val: i, neighbours: [] };
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    const success = succProb[i];
    graph[from].neighbours.push([to, success]);
    graph[to].neighbours.push([from, success]);
  }

  // bfs
  const queue = [];
  const maxSuccessAt = [];
  for (const [neighbour, success] of graph[start_node].neighbours)
    queue.push([neighbour, success]);

  for (let i = 0; i < queue.length; i++) {
    const [node, success] = queue[i];
    if (maxSuccessAt[node] >= success) continue;
    maxSuccessAt[node] = success;
    for (const [neighbour, nSuccess] of graph[node].neighbours)
      queue.push([neighbour, success * nSuccess]);
  }

  return maxSuccessAt[end_node] || 0;
};

console.log(
  maxProbability(
    3,
    [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    [0.5, 0.5, 0.2],
    0,
    2
  )
);
