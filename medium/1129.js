/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  let seen = new Set();

  function recurse(goalBlue = new Set([1]), goalRed = new Set([1])) {
    let nextGoalBlue = new Set();
    let nextGoalRed = new Set();

    for (const [from, to] of redEdges)
      if (!goalRed.has(to) || seen.has("blue," + from)) continue;
      else if (from === 0) return 1;
      else {
        seen.add("blue," + from);
        nextGoalBlue.add(from);
      }

    for (const [from, to] of blueEdges)
      if (!goalBlue.has(to) || seen.has("red," + from)) continue;
      else if (from === 0) return 1;
      else {
        seen.add("red," + from);
        nextGoalRed.add(from);
      }

    if (!nextGoalBlue.size && !nextGoalRed.size) return Infinity;
    return 1 + recurse(nextGoalBlue, nextGoalRed);
  }

  let result = [0];

  for (let i = 1; i < n; i++) {
    seen = new Set();
    result[i] = recurse(new Set([i]), new Set([i]));
    if (result[i] === Infinity) result[i] = -1;
  }

  return result;
};

console.log(
  shortestAlternatingPaths(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    []
  )
);
