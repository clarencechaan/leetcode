/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function (edges, guesses, k) {
  const n = edges.length + 1;
  const nodes = [];
  for (let i = 0; i < n; i++) nodes[i] = { val: i, neighbours: [] };
  for (const [a, b] of edges) {
    nodes[a].neighbours.push(b);
    nodes[b].neighbours.push(a);
  }

  const guessMap = {};
  for (const [u, v] of guesses) {
    if (!guessMap[u]) guessMap[u] = {};
    guessMap[u][v] = true;
  }

  const memo = Array(n)
    .fill()
    .map(() => ({}));
  function getNumCorrectGuesses(node, parent = -1) {
    if (memo[node][parent] >= 0) return memo[node][parent];
    let result = 0;
    if (guessMap[parent]?.[node]) result++;
    for (const child of nodes[node].neighbours)
      if (child === parent) continue;
      else result += getNumCorrectGuesses(child, node);
    memo[node][parent] = result;
    return result;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) if (getNumCorrectGuesses(i) >= k) ans++;
  return ans;
};

console.log(
  rootCount(
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [4, 2],
    ],
    [
      [1, 3],
      [0, 1],
      [1, 0],
      [2, 4],
    ],
    3
  )
);
