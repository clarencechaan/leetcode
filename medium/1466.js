/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let edgeMap = {};
  for (let i = 0; i < n; i++) edgeMap[i] = {};
  for (const [from, to] of connections) {
    edgeMap[from][to] = { mustFlip: true };
    edgeMap[to][from] = { mustFlip: false };
  }

  function traverse(node = 0, prev) {
    let sum = 0;
    for (let nextNode in edgeMap[node]) {
      nextNode = parseInt(nextNode);
      if (nextNode === prev) continue;
      sum +=
        (edgeMap[node][nextNode].mustFlip ? 1 : 0) + traverse(nextNode, node);
    }
    return sum;
  }

  return traverse();
};

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);
