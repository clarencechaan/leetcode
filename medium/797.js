/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let result = [];

  function traverse(node = 0, history = [0]) {
    if (node == graph.length - 1) result.push(history);
    for (const nextNode of graph[node])
      traverse(nextNode, [...history, nextNode]);
  }

  traverse();

  return result;
};

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
