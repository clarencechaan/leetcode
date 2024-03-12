/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  // notice: every node points to exactly one or 0 other nodes
  // idea:
  // 1. create a helper function getCycleLength(startingNode) that returns the length of the cycle found when traversing from startingNode
  // 2. run helper function on each node, return the max value returned by the helper function

  let seen = new Set();
  function getCycleLength(startingNode) {
    let traversed = {};
    let node = startingNode;
    let count = 0;
    while (!traversed[node] && !seen.has(node)) {
      traversed[node] = count;
      seen.add(node);
      node = edges[node];
      count++;
    }
    let cycle = new Set();
    if (node >= 0) {
      for (let i = traversed[node]; i < count; i++) {
        cycle.add(node);
        node = edges[node];
      }
    }
    traversed = new Set(
      Object.entries(traversed).map(([node]) => parseInt(node))
    );
    return cycle.size;
  }

  let result = -1;
  for (let node = 0; node < edges.length; node++) {
    const cycleLength = getCycleLength(node);
    if (cycleLength) result = Math.max(result, cycleLength);
  }
  return result;
};

console.log(longestCycle([3, 3, 4, 2, 3]));
