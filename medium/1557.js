/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  let seen = new Set();
  let result = new Set();

  let edgeMap = {};
  for (const [from, to] of edges)
    if (!edgeMap[from]) edgeMap[from] = [to];
    else edgeMap[from].push(to);

  function recurse(start = 0, node = start) {
    if (start === node) result.add(start);
    if (seen.has(node)) result.delete(node);
    else {
      seen.add(node);
      if (edgeMap[node])
        for (const nextNode of edgeMap[node]) recurse(start, nextNode);
    }
  }

  for (let i = 0; i < n; i++) recurse(i);
  return [...result];
};

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [3, 2],
  ])
);
