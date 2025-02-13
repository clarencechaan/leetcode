/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
  initial.sort((a, b) => (a > b ? 1 : -1));
  const n = graph.length;

  function getNumInfected(removedNode) {
    const infected = new Set(initial);
    infected.delete(removedNode);
    for (const node of infected) {
      for (let otherNode = 0; otherNode < n; otherNode++) {
        if (graph[node][otherNode] === 1 && otherNode !== removedNode) {
          infected.add(otherNode);
        }
      }
    }
    return infected.size;
  }

  let min = Infinity;
  let result;
  for (const node of initial) {
    const numInfected = getNumInfected(node);
    if (numInfected < min) {
      min = numInfected;
      result = node;
    }
  }
  return result;
};
