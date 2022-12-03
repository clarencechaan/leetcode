/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  function cellPerimeter(x, y) {
    let result = 0;
    if (!grid[y][x - 1]) result++;
    if (!grid[y][x + 1]) result++;
    if (!grid[y - 1]?.[x]) result++;
    if (!grid[y + 1]?.[x]) result++;
    return result;
  }

  let result = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j]) result += cellPerimeter(j, i);
  return result;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
