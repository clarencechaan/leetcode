/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let neighborsArr = [];

  (function buildNeighborsArr(node) {
    if (!node || neighborsArr[node.val - 1]) return;
    (neighborsArr[node.val - 1] = node.neighbors.map((n) => n.val)),
      node.neighbors.forEach((n) => buildNeighborsArr(n));
  })(node);

  let nodes = [];
  for (let i = 0; i < neighborsArr.length; i++) nodes.push(new Node(i + 1));
  for (let i = 0; i < nodes.length; i++)
    nodes[i].neighbors = neighborsArr[i].map((neighbor) => nodes[neighbor - 1]);

  return nodes[0] || null;
};
