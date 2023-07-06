/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  function TreeNode(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }

  let trees = [];
  for (let i = 0; i < n; i++) trees.push(new TreeNode(i));

  for (let [from, to] of edges) {
    trees[from].neighbors.push(trees[to]);
    trees[to].neighbors.push(trees[from]);
  }

  function markTreesWithApple(node = trees[0], prev) {
    let appleWithin = hasApple[node.val];
    for (const neighbor of node.neighbors)
      if (neighbor !== prev)
        appleWithin = markTreesWithApple(neighbor, node) || appleWithin;
    node.appleWithin = appleWithin;
    return appleWithin;
  }

  markTreesWithApple();

  function recurse(node = trees[0], prev) {
    if (!node.appleWithin) return 0;
    let distance = 0;
    for (const neighbor of node.neighbors)
      if (neighbor !== prev && neighbor.appleWithin)
        distance += 2 + recurse(neighbor, node);
    return distance;
  }

  return recurse();
};

console.log(
  minTime(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ],
    [false, false, true, false, true, true, false]
  )
);
