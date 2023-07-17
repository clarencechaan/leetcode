/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  let n = grid.length;
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    let zeros = n - 1 - i;
    let idx = grid.findIndex(
      (row, idx) =>
        idx >= i &&
        row.slice(-zeros).filter((cell) => cell === 0).length === zeros
    );
    if (idx < 0) return -1;
    result += Math.abs(idx - i);
    if (i !== idx)
      grid = [
        ...grid.slice(0, i),
        grid[idx],
        ...grid.slice(i, idx),
        ...grid.slice(idx + 1),
      ];
  }

  return result;
};

console.log(
  minSwaps([
    [0, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
  ])
);
