/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  let effortGrid = [];
  for (let i = 0; i < rows; i++) effortGrid.push([]);
  effortGrid[0][0] = 0;

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        if (i === 0 && j === 0) continue;
        let up = Math.max(
          Math.abs(heights[i - 1]?.[j] - heights[i][j]),
          effortGrid[i - 1]?.[j]
        );
        let down = Math.max(
          Math.abs(heights[i + 1]?.[j] - heights[i][j]),
          effortGrid[i + 1]?.[j]
        );
        let left = Math.max(
          Math.abs(heights[i][j - 1] - heights[i][j]),
          effortGrid[i][j - 1]
        );
        let right = Math.max(
          Math.abs(heights[i][j + 1] - heights[i][j]),
          effortGrid[i][j + 1]
        );
        let min = Math.min(
          up >= 0 ? up : Infinity,
          down >= 0 ? down : Infinity,
          left >= 0 ? left : Infinity,
          right >= 0 ? right : Infinity
        );
        if (min !== effortGrid[i][j]) {
          done = false;
          effortGrid[i][j] = min;
        }
      }
  }

  return effortGrid[rows - 1][cols - 1];
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ])
);
