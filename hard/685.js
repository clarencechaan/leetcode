/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  const nodes = [];
  for (const [from, to] of edges) {
    if (!nodes[from])
      nodes[from] = { val: from, children: new Set(), numParents: 0 };
    if (!nodes[to]) nodes[to] = { val: to, children: new Set(), numParents: 0 };
    nodes[from].children.add(to);
    nodes[to].numParents++;
  }

  function isTree(root, val = root, seen = new Set()) {
    const node = nodes[val];
    if (seen.has(val)) return false;
    seen.add(val);
    for (const child of node.children)
      if (!isTree(root, child, seen)) return false;
    return root !== val || seen.size === nodes.length - 1;
  }

  function hasTree(nodes) {
    for (let val = 1; val < nodes.length; val++) {
      const node = nodes[val];
      if (node.numParents === 0 && isTree(val)) return true;
    }
    return false;
  }

  for (let i = edges.length - 1; i >= 0; i--) {
    const [from, to] = edges[i];
    nodes[from].children.delete(to);
    nodes[to].numParents--;
    if (hasTree(nodes)) return edges[i];
    nodes[from].children.add(to);
    nodes[to].numParents++;
  }
};

console.log(
  findRedundantDirectedConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
