/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let startingPositions = [];
  for (let i = 0; i < matrix[0].length; i++) startingPositions.push([i, 0]);
  for (let i = 1; i < matrix.length; i++) startingPositions.push([0, i]);

  for (const position of startingPositions) {
    const element = matrix[position[1]][position[0]];
    for (
      let i = 0;
      position[1] + i < matrix.length && position[0] + i < matrix[0].length;
      i++
    )
      if (matrix[position[1] + i][position[0] + i] !== element) return false;
  }

  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
