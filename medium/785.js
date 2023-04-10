/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let setA = new Set();
  let setB = new Set();

  let noFit = new Set();
  while (setA.size + setB.size < graph.length)
    for (let i = 0; i < graph.length; i++) {
      if (setA.size === 0 && setB.size === 0) {
        setA.add(i);
        for (const node of graph[i]) setB.add(node);
      } else if (setA.has(i))
        for (const node of graph[i])
          if (setA.has(node)) return false;
          else setB.add(node);
      else if (setB.has(i))
        for (const node of graph[i])
          if (setB.has(node)) return false;
          else setA.add(node);
      else if (graph[i].some((node) => setA.has(node))) {
        if (setA.has(i)) return false;
        for (const node of graph[i])
          if (setB.has(node)) return false;
          else setA.add(node);
      } else if (graph[i].some((node) => setB.has(node))) {
        if (setB.has(i)) return false;
        for (const node of graph[i])
          if (setA.has(node)) return false;
          else setB.add(node);
      } else if (noFit.has(i)) {
        setA.add(i);
        for (const node of graph[i]) setB.add(node);
      } else noFit.add(i);
    }

  return true;
};

console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ])
);
