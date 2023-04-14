/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  let unsafe = new Set();
  let seen = new Set();

  function traverse(node, history = new Set()) {
    if (history.has(node) || unsafe.has(node)) {
      for (const h of history) unsafe.add(h);
      return;
    }

    if (seen.has(node)) return;
    seen.add(node);
    for (const nextNode of graph[node])
      traverse(nextNode, new Set(history).add(node));
  }

  for (let i = 0; i < graph.length; i++) traverse(i);

  let result = [];
  for (let i = 0; i < graph.length; i++) if (!unsafe.has(i)) result.push(i);

  return result;
};

console.log(eventualSafeNodes([[0], [2, 3, 4], [3, 4], [0, 4], []]));
