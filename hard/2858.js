/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function (n, edges) {
  const nodes = [];
  for (let i = 0; i < n; i++)
    nodes[i] = {
      val: i,
      neighbours: [],
      children: [],
      costToRoot: 0,
    };
  for (const [a, b] of edges) {
    nodes[a].neighbours.push([b, 1]);
    nodes[b].neighbours.push([a, -1]);
  }

  let costFromRoot = 0;

  function markChildren(node = 0, seen = new Set([node]), costToRoot = 0) {
    nodes[node].costToRoot = costToRoot;
    for (const [child, direction] of nodes[node].neighbours) {
      if (seen.has(child)) continue;
      seen.add(child);
      if (direction === -1) costFromRoot++;
      nodes[node].children.push([child, direction]);
      markChildren(child, seen, costToRoot + direction);
    }
    delete nodes[node].neighbours;
  }

  markChildren();

  function getTreeCost(node) {
    let cost = costFromRoot;
    cost += nodes[node].costToRoot;
    return cost;
  }

  const ans = [];
  for (let i = 0; i < n; i++) ans[i] = getTreeCost(i);
  return ans;
};

const start = Date.now();

console.log(
  minEdgeReversals(4, [
    [2, 0],
    [2, 1],
    [1, 3],
  ])
);

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
