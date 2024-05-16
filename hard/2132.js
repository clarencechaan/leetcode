/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function (grid, stampHeight, stampWidth) {
  const n = grid.length;
  const m = grid[0].length;

  // returns true if grid[row] is free to fill in range [start, end)
  function isFreeRow(row, start, end) {
    for (let i = start; i < end; i++)
      if (grid[row]?.[i] === undefined || grid[row][i] === 1) return false;
    return true;
  }

  function isFreeCol(col, start, end) {
    for (let i = start; i < end; i++)
      if (grid[i]?.[col] === undefined || grid[i][col] === 1) return false;
    return true;
  }

  // attempts to fill the tallest rectangle of width `stampWidth`, with its left
  // side on (row,col)
  function leftRectangle(row, col) {
    let top = row;
    let bottom = row;
    if (!isFreeRow(row, col, col + stampWidth)) return false;

    while (isFreeRow(top - 1, col, col + stampWidth)) top--;
    while (isFreeRow(bottom + 1, col, col + stampWidth)) bottom++;

    if (bottom - top + 1 < stampHeight) return false;

    // fill squares
    for (let i = top; i <= bottom; i++)
      for (let j = col; j < col + stampWidth; j++) grid[i][j] = "S";

    return true;
  }

  function rightRectangle(row, col) {
    let top = row;
    let bottom = row;
    if (!isFreeRow(row, col - stampWidth + 1, col + 1)) return false;

    while (isFreeRow(top - 1, col - stampWidth + 1, col + 1)) top--;
    while (isFreeRow(bottom + 1, col - stampWidth + 1, col + 1)) bottom++;

    if (bottom - top + 1 < stampHeight) return false;

    // fill squares
    for (let i = top; i <= bottom; i++)
      for (let j = col - stampWidth + 1; j < col + 1; j++) grid[i][j] = "S";

    return true;
  }

  // widest rectangle
  function upRectangle(row, col) {
    let left = col;
    let right = col;
    if (!isFreeCol(col, row, row + stampHeight)) return false;

    while (isFreeCol(left - 1, row, row + stampHeight)) left--;
    while (isFreeCol(right + 1, row, row + stampHeight)) right++;

    if (right - left + 1 < stampWidth) return false;

    // fill squares
    for (let i = row; i < row + stampHeight; i++)
      for (let j = left; j <= right; j++) grid[i][j] = "S";

    return true;
  }

  function downRectangle(row, col) {
    let left = col;
    let right = col;
    if (!isFreeCol(col, row - stampHeight + 1, row + 1)) return false;

    while (isFreeCol(left - 1, row - stampHeight + 1, row + 1)) left--;
    while (isFreeCol(right + 1, row - stampHeight + 1, row + 1)) right++;

    if (right - left + 1 < stampWidth) return false;

    // fill squares
    for (let i = row - stampHeight + 1; i < row + 1; i++)
      for (let j = left; j <= right; j++) grid[i][j] = "S";

    return true;
  }

  for (let i = 0; i < n; i++) {
    if (grid[i][0] === 0) grid[i][0] = "L";
    if (grid[i][m - 1] === 0) grid[i][m - 1] = "R";
  }

  for (let i = 0; i < m; i++) {
    if (grid[0][i] === 0) grid[0][i] = "U";
    if (grid[n - 1][i] === 0) grid[n - 1][i] = "D";
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (grid[i][j] === 1) {
        if (grid[i][j + 1] === 0) grid[i][j + 1] = "L";
        if (grid[i][j - 1] === 0) grid[i][j - 1] = "R";
        if (grid[i + 1]?.[j] === 0) grid[i + 1][j] = "U";
        if (grid[i - 1]?.[j] === 0) grid[i - 1][j] = "D";
      }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "L" && !leftRectangle(i, j)) return false;
      if (grid[i][j] === "R" && !rightRectangle(i, j)) return false;
      if (grid[i][j] === "U" && !upRectangle(i, j)) return false;
      if (grid[i][j] === "D" && !downRectangle(i, j)) return false;
    }

  return true;
};

console.log(
  possibleToStamp(
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    4,
    3
  )
);
