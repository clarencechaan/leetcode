/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length;
  const memo = Array(n)
    .fill()
    .map(() => []);
  function getDistance(from, to) {
    if (memo[from][to] >= 0) return memo[from][to];
    const seen = new Set([from]);
    const queue = [[from, 0]];
    for (const [node, dist] of queue) {
      if (node === to) {
        memo[from][to] = dist;
        return dist;
      }
      for (const neighbour of graph[node])
        if (seen.has(neighbour)) continue;
        else {
          seen.add(neighbour);
          queue.push([neighbour, dist + 1]);
        }
    }
  }

  const memo2 = {};
  function getMinPathLengthOfSet(start, set) {
    if (set.size === 1) return 0;
    const str = [start, ...[...set].sort()];
    if (memo2[str] >= 0) return memo2[str];
    let result = Infinity;
    set.delete(start);
    for (let next = 0; next < n; next++) {
      if (!set.has(next)) continue;
      result = Math.min(
        result,
        getDistance(start, next) + getMinPathLengthOfSet(next, set)
      );
    }
    set.add(start);
    memo2[str] = result;
    return result;
  }

  let ans = Infinity;

  const set = new Set(
    Array(n)
      .fill()
      .map((_, idx) => idx)
  );
  for (let start = 0; start < n; start++)
    ans = Math.min(ans, getMinPathLengthOfSet(start, set));

  return ans;
};

console.log(shortestPathLength([[1, 2, 3], [0], [0], [0]]));
