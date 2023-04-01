/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let nodes = new Set();
  for (const edge of edges) nodes.add(edge[0]).add(edge[1]);

  function hasCycle(removedIdx) {
    let map = {};
    for (let i = 0; i < edges.length; i++)
      if (i === removedIdx) continue;
      else {
        if (!map[edges[i][0]]) map[edges[i][0]] = [];
        if (!map[edges[i][1]]) map[edges[i][1]] = [];
        map[edges[i][0]].push(edges[i][1]);
        map[edges[i][1]].push(edges[i][0]);
      }

    let seen = new Set();

    function recurse(val, prev, history = new Set()) {
      seen.add(val);
      let nextNodes = map[val].filter((node) => node !== prev);
      for (const node of nextNodes)
        if (history.has(node) || recurse(node, val, new Set(history).add(val)))
          return true;
      return false;
    }

    let result = recurse(parseInt(Object.keys(map)[0]));
    if (seen.size !== nodes.size) result = true;
    return result;
  }

  for (let i = edges.length - 1; i >= 0; i--) if (!hasCycle(i)) return edges[i];
};

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
