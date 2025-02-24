/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const set = new Set();
  for (const [u, v] of adjacentPairs) set.add(u).add(v);

  const nodes = {};
  for (const num of set) nodes[num] = { num, neighbours: [] };

  for (const [u, v] of adjacentPairs) {
    nodes[u].neighbours.push(v);
    nodes[v].neighbours.push(u);
  }

  let curr = [...set].find((num) => nodes[num].neighbours.length === 1);
  const resultSet = new Set([curr]);
  while (resultSet.size < set.size) {
    const next = nodes[curr].neighbours.find((node) => !resultSet.has(node));
    resultSet.add(next);
    curr = next;
  }

  return [...resultSet];
};
