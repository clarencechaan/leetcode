/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function (edges) {
  // build tree
  const nodes = [];
  for (const [a, b] of edges) {
    if (!nodes[a]) nodes[a] = { val: a, neighbours: [] };
    if (!nodes[b]) nodes[b] = { val: b, neighbours: [] };
  }
  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  function countSize(node = 0, visited = new Set()) {
    if (visited.has(node)) return 0;
    visited.add(node);
    const size =
      1 +
      nodes[node].neighbours.reduce(
        (sum, neighbour) => countSize(neighbour, visited) + sum,
        0
      );
    visited.delete(node);
    nodes[node].size = size;
    return size;
  }

  countSize();

  let numGood = 0;
  function countGood(node = 0, visited = new Set()) {
    if (visited.has(node)) return 0;
    visited.add(node);
    const isGood =
      new Set(
        nodes[node].neighbours
          .filter((neighbour) => !visited.has(neighbour))
          .map((neighbour) => nodes[neighbour].size)
      ).size <= 1;
    if (isGood) numGood++;
    nodes[node].neighbours.forEach((neighbour) =>
      countGood(neighbour, visited)
    );
    visited.delete(node);
  }

  countGood();

  return numGood;
};
