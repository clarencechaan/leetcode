/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  // 0: land
  // 1: water
  // day 0: entire matrix is land
  // cells[i] === [r,c], where the matrix at row r and column c will be covered with water on day i
  // find the last day it is possible to walk from the top to the bottom, walking only on land

  // idea:
  // 1. write a helper function isWalkable(day) that returns whether it is possible to walk from the top to the bottom
  //    on day `day`
  // 2. binary search for the highest value of `day` where isWalkable(day) returns true

  function isWalkable(day) {
    // create our land/water matrix
    const matrix = [];
    for (let i = 0; i < row; i++) matrix.push(Array(col).fill(0));

    // cover the cells with water up to day `day`
    for (let i = 0; i < day; i++) {
      const [r, c] = cells[i];
      matrix[r - 1][c - 1] = 1;
    }

    let queue = [];
    for (let i = 0; i < col; i++) queue.push([i, 0]); // can start from any cell in the top row

    for (const [x, y] of queue) {
      if (matrix[y]?.[x] !== 0 && matrix[y]?.[x] !== 1) continue;
      if (matrix[y][x] === 0) {
        matrix[y][x] = "R"; // cell at [x,y] is reachable
        queue.push([x - 1, y]);
        queue.push([x + 1, y]);
        queue.push([x, y - 1]);
        queue.push([x, y + 1]);
      } else if (matrix[y][x] === 1) matrix[y][x] = "N"; // not reachable
    }

    return matrix[row - 1].includes("R");
  }

  // binary search
  let min = 0;
  let max = cells.length;
  let day = Math.ceil((min + max) / 2);
  while (min < max) {
    if (isWalkable(day)) min = day;
    else max = day - 1;
    day = Math.ceil((min + max) / 2);
  }

  return day;
};

console.log(
  latestDayToCross(2, 2, [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ])
);
