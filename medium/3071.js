/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const n = grid.length;

  const cellType = Array(n)
    .fill()
    .map(() => Array(n).fill(""));
  for (let i = 0; i < n / 2 - 1; i++) cellType[i][i] = "I";
  for (let i = 0; i < n / 2 - 1; i++) cellType[i][n - 1 - i] = "I";
  for (let i = (n - 1) / 2; i < n; i++) cellType[i][(n - 1) / 2] = "I";
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) if (!cellType[i][j]) cellType[i][j] = "O";

  function getCost(outside, inside) {
    let cost = 0;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const curr = grid[i][j];
        const goal = cellType[i][j] === "I" ? inside : outside;
        if (curr !== goal) cost++;
      }
    return cost;
  }

  let result = Infinity;
  for (let outside = 0; outside <= 2; outside++)
    for (let inside = 0; inside <= 2; inside++)
      if (outside === inside) continue;
      else result = Math.min(result, getCost(outside, inside));
  return result;
};
