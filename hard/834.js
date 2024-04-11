/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  // create our tree
  const nodes = Array(n)
    .fill()
    .map((_, val) => ({ val, neighbours: [] }));

  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  // is it possible to find the sum of distances between the ith node in the tree and all other nodes
  //    WITHOUT traversing the entire tree every time?

  // mark number of descendants (including itself) for each node
  function getDescendants(node = 0, seen = new Set()) {
    if (seen.has(node)) return 0;
    seen.add(node);
    let numDescendants = 1;
    for (const neighbour of nodes[node].neighbours)
      numDescendants += getDescendants(neighbour, seen);
    seen.delete(node);
    nodes[node].descendants = numDescendants;
    return numDescendants;
  }

  getDescendants();

  // get initial sum distance between root (0) and all other nodes
  function getInitialSum(node = 0, seen = new Set()) {
    if (seen.has(node)) return 0;
    seen.add(node);
    let sum = seen.size - 1;
    for (const neighbour of nodes[node].neighbours)
      sum += getInitialSum(neighbour, seen);
    seen.delete(node);
    return sum;
  }

  const answer = [];
  function getSums(node = 0, sum = getInitialSum()) {
    if (answer[node]) return;
    answer[node] = sum;
    const nodeDescendants = nodes[node].descendants;
    for (const neighbour of nodes[node].neighbours) {
      const neighbourDescendants = nodes[neighbour].descendants;
      nodes[neighbour].descendants = nodeDescendants;
      nodes[node].descendants = nodeDescendants - neighbourDescendants;
      getSums(neighbour, sum + nodes[node].descendants - neighbourDescendants);
    }
  }

  getSums();

  return answer;
};

console.log(
  sumOfDistancesInTree(6, [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ])
);
