/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  function move() {
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      if (
        parseInt(row.map((val) => (val ? 0 : 1)).join(""), 2) >
        parseInt(row.join(""), 2)
      ) {
        for (let j = 0; j < grid[i].length; j++)
          if (grid[i][j]) grid[i][j] = 0;
          else grid[i][j] = 1;
        return true;
      }
    }

    for (let j = 0; j < grid[0].length; j++) {
      let column = [];
      for (let i = 0; i < grid.length; i++) column.push(grid[i][j]);
      if (column.filter((val) => val).length < column.length / 2) {
        for (let i = 0; i < grid.length; i++)
          if (grid[i][j]) grid[i][j] = 0;
          else grid[i][j] = 1;
        return true;
      }
    }

    return false;
  }

  while (move()) {}

  return grid.reduce((sum, row) => sum + parseInt(row.join(""), 2), 0);
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
