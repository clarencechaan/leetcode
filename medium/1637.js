/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xPoints = new Set();
  for (const [x] of points) xPoints.add(x);
  xPoints = [...xPoints].sort((a, b) => (a > b ? 1 : -1));
  let max = 0;
  for (let i = 1; i < xPoints.length; i++)
    max = Math.max(max, xPoints[i] - xPoints[i - 1]);
  return max;
};

console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
