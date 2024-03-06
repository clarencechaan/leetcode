/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  // step1: gather groups of connected components
  // step2: check the completeness of each group of connected components

  // create a node for each value from 0 to n-1
  let nodes = [];
  for (let i = 0; i < n; i++) nodes.push({ nodeId: i, neighbours: new Set() });

  // add relevant neighbours for each node
  for (const [a, b] of edges) {
    nodes[a].neighbours.add(b);
    nodes[b].neighbours.add(a);
  }

  // gives a set of nodes that are connected
  function getGroup(nodeId = 0, group = new Set()) {
    if (group.has(nodeId)) return;
    group.add(nodeId);
    const { neighbours } = nodes[nodeId];
    for (const neighbour of neighbours) {
      getGroup(neighbour, group);
    }
    return group;
  }

  // gather groups
  let seen = new Set();
  let groups = [];
  for (let i = 0; i < n; i++) {
    if (seen.has(i)) continue;
    const group = getGroup(i);
    groups.push(group);
    for (const nodeId of group) seen.add(nodeId);
  }

  // return true if group is complete
  // otherwise return false
  function isGroupComplete(group) {
    for (const a of group) {
      for (const b of group) {
        if (a === b) continue;
        if (!nodes[a].neighbours.has(b)) return false;
      }
    }
    return true;
  }

  // count the groups that are complete
  let result = 0;
  for (const group of groups) if (isGroupComplete(group)) result++;
  return result;
};

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
);
