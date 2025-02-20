/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = 0;
  let y2 = 0;

  for (let y = 0; y < grid.length; y++)
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 1) {
        x1 = Math.min(x1, x);
        y1 = Math.min(y1, y);
        x2 = Math.max(x2, x);
        y2 = Math.max(y2, y);
      }
    }

  return (x2 - x1 + 1) * (y2 - y1 + 1);
};
