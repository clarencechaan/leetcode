/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  function markIslands(grid2, row, col) {
    if (grid2[row]?.[col] !== 1) return;
    grid2[row][col] = "X";
    markIslands(grid2, row - 1, col);
    markIslands(grid2, row + 1, col);
    markIslands(grid2, row, col - 1);
    markIslands(grid2, row, col + 1);
  }

  let subIslands = [];
  for (let i = 0; i < grid2.length; i++)
    for (let j = 0; j < grid2[i].length; j++)
      if (grid2[i][j] === 1) {
        subIslands.push([i, j]);
        markIslands(grid2, i, j);
      }

  function isSubIslandContained(row, col) {
    if (grid2[row]?.[col] !== "X") return true;
    if (grid1[row][col] !== 1) return false;
    grid2[row][col] = "Y";
    return (
      isSubIslandContained(row - 1, col) &&
      isSubIslandContained(row + 1, col) &&
      isSubIslandContained(row, col - 1) &&
      isSubIslandContained(row, col + 1)
    );
  }

  subIslands = subIslands.filter(([row, col]) =>
    isSubIslandContained(row, col)
  );
  return subIslands.length;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);
