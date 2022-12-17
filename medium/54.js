/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];

  let nextY = 0;
  let nextX = 0;
  let direction = "R";

  while (matrix[nextY]?.[nextX] !== undefined) {
    result.push(matrix[nextY][nextX]);
    matrix[nextY][nextX] = undefined;
    switch (direction) {
      case "R":
        switch (matrix[nextY][nextX + 1]) {
          case undefined:
            direction = "D";
            nextY++;
            break;
          default:
            nextX++;
        }
        break;
      case "D":
        switch (matrix[nextY + 1]?.[nextX]) {
          case undefined:
            direction = "L";
            nextX--;
            break;
          default:
            nextY++;
        }
        break;
      case "L":
        switch (matrix[nextY][nextX - 1]) {
          case undefined:
            direction = "U";
            nextY--;
            break;
          default:
            nextX--;
        }
        break;
      case "U":
        switch (matrix[nextY - 1]?.[nextX]) {
          case undefined:
            direction = "R";
            nextX++;
            break;
          default:
            nextY--;
        }
    }
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
