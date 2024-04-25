/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
  // create the nodes
  function createNodes() {
    const nodes = [];
    for (let i = 1; i <= n; i++) nodes[i] = { val: i, neighbours: [] };
    for (const [a, b] of edges) {
      nodes[a].neighbours.push(b);
      nodes[b].neighbours.push(a);
    }
    return nodes;
  }

  // only include child nodes for each node's neighbours
  function forceDirection(nodes, node = 1, result = []) {
    result[node] = { val: node, children: [], probability: 0 };
    for (const neighbour of nodes[node].neighbours)
      if (result[neighbour]) continue;
      else {
        result[node].children.push(neighbour);
        forceDirection(nodes, neighbour, result);
      }
    return result;
  }

  let nodes = createNodes();
  nodes = forceDirection(nodes);
  nodes[1].probability = 1;

  // update probabilities after 1 second passing
  function updateProbabilities(nodes) {
    const probabilities = Array(n + 1).fill(0);
    for (let node = 1; node <= n; node++) {
      const numChildren = nodes[node].children.length;
      if (numChildren === 0) {
        probabilities[node] = probabilities[node] || nodes[node].probability;
        continue;
      }
      const childrenProbability = nodes[node].probability / numChildren;
      for (const child of nodes[node].children)
        probabilities[child] = childrenProbability;
    }
    for (let node = 1; node <= n; node++)
      nodes[node].probability = probabilities[node];
  }

  for (let second = 1; second <= t; second++) updateProbabilities(nodes);
  return nodes[target].probability;
};

console.log(
  frogPosition(
    7,
    [
      [1, 2],
      [1, 3],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 5],
    ],
    2,
    4
  )
);
