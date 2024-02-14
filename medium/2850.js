/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  let extra = [];
  let empty = [];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (grid[i][j] > 1)
        for (let k = 0; k < grid[i][j] - 1; k++) extra.push([i, j]);
      else if (grid[i][j] === 0) empty.push([i, j]);

  function recurse(exIdx = 0, usedEmIdx = new Set()) {
    if (exIdx >= extra.length) return 0;
    const ex = extra[exIdx];
    const [fromRow, fromCol] = ex;
    let result = Infinity;
    for (let i = 0; i < empty.length; i++) {
      if (usedEmIdx.has(i)) continue;
      usedEmIdx.add(i);
      const [toRow, toCol] = empty[i];
      const distance = Math.abs(fromRow - toRow) + Math.abs(fromCol - toCol);
      result = Math.min(result, distance + recurse(exIdx + 1, usedEmIdx));
      usedEmIdx.delete(i);
    }
    return result;
  }

  return recurse();
};

console.log(
  minimumMoves([
    [1, 1, 0],
    [1, 1, 1],
    [1, 2, 1],
  ])
);
