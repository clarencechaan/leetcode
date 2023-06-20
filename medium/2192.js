/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  let parentMap = {};
  for (const [from, to] of edges)
    if (!parentMap[to]) parentMap[to] = [from];
    else parentMap[to].push(from);

  let memo = [];

  function getParentSet(node) {
    if (memo[node] !== undefined) return memo[node];
    let result = [];
    if (parentMap[node]) {
      result = parentMap[node];
      for (const nextNode of parentMap[node])
        result = [...result, ...getParentSet(nextNode)];
    }

    result = new Set(result);
    memo[node] = result;
    return result;
  }

  let result = [];
  for (let i = 0; i < n; i++)
    result[i] = [...getParentSet(i)].sort((a, b) => (a > b ? 1 : -1));

  return result;
};

console.log(
  getAncestors(8, [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ])
);
