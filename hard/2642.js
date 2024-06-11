/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  const nodes = Array(n)
    .fill()
    .map((_, idx) => ({ val: idx, neighbours: [] }));

  for (const [a, b, cost] of edges) nodes[a].neighbours.push([b, cost]);

  this.nodes = nodes;
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const [a, b, cost] = edge;
  this.nodes[a].neighbours.push([b, cost]);
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const queue = [[node1, 0]];
  const minCost = [];
  minCost[node1] = 0;

  for (const [node, cost] of queue) {
    for (const [neighbour, edgeCost] of this.nodes[node].neighbours) {
      const nextCost = cost + edgeCost;
      if (minCost[neighbour] === undefined || minCost[neighbour] > nextCost) {
        minCost[neighbour] = nextCost;
        queue.push([neighbour, nextCost]);
      }
    }
  }

  return minCost[node2] >= 0 ? minCost[node2] : -1;
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
