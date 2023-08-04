/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function maxRectangleAt(x, y) {
    let arr = [];
    let streak;
    for (let i = y; i < rows; i++) {
      if (matrix[i][x] === "0") break;
      streak = 0;
      for (let j = x; matrix[i][j] === "1"; j++) streak++;
      arr.push(streak);
    }

    let max = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, min * (i + 1));
    }
    return max;
  }

  let result = 0;
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      result = Math.max(result, maxRectangleAt(j, i));
  return result;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
