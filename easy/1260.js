/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
// 1) copy input grid to new grid
// 2) loop k times:
//  a) set each cell value of new grid to corresponding values of previous grid
// 3) return resulting grid
var shiftGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;
  let shifted = copy(grid);

  for (let count = 0; count < k; count++) {
    let newGrid = copy(shifted);

    newGrid[0][0] = shifted[m - 1][n - 1];
    for (let i = 0; i < m; i++) {
      if (i + 1 < m) newGrid[i + 1][0] = shifted[i][n - 1];
      for (let j = 0; j < n; j++) {
        if (j + 1 < n) newGrid[i][j + 1] = shifted[i][j];
      }
    }

    shifted = copy(newGrid);
  }

  return shifted;
};

// creates a copy of a two-dimensional array
// allows passing of two-dimensional by value rather than reference
function copy(arr) {
  let newArr = [];
  arr.forEach((row) => {
    newArr.push([...row]);
  });
  return newArr;
}

console.log(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
);
