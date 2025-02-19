/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  const n = forest.length;
  const m = forest[0].length;

  let trees = {};
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (forest[i][j] >= 2) trees[forest[i][j]] = [j, i];
  trees = Object.entries(trees)
    .map(([tree, [x, y]]) => [x, y, +tree])
    .sort((a, b) => (a[2] > b[2] ? 1 : -1));

  function minSteps(x1, y1, x2, y2) {
    const visited = Array(n)
      .fill()
      .map(() => []);
    const queue = [[x1, y1, 0]];
    for (const [x, y, steps] of queue) {
      if (
        x < 0 ||
        x >= m ||
        y < 0 ||
        y >= n ||
        forest[y][x] === 0 ||
        visited[y][x]
      )
        continue;
      if (x === x2 && y === y2) return steps;
      visited[y][x] = true;
      queue.push([x - 1, y, steps + 1]);
      queue.push([x + 1, y, steps + 1]);
      queue.push([x, y - 1, steps + 1]);
      queue.push([x, y + 1, steps + 1]);
    }
    return Infinity;
  }

  let result = 0;
  for (let i = 0; i < trees.length && result < Infinity; i++) {
    const [x1, y1] = trees[i - 1] ?? [0, 0];
    const [x2, y2] = trees[i];
    const steps = minSteps(x1, y1, x2, y2);
    result += steps;
  }

  if (result === Infinity) return -1;
  return result;
};
