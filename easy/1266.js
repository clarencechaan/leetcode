/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  function timeToPoint([ax, ay], [bx, by]) {
    let diagonal = Math.min(Math.abs(bx - ax), Math.abs(by - ay));
    let horizontal = Math.abs(bx - ax) - diagonal;
    let vertical = Math.abs(by - ay) - diagonal;

    return diagonal + horizontal + vertical;
  }

  let result = 0;
  for (let i = 1; i < points.length; i++)
    result += timeToPoint(points[i - 1], points[i]);
  return result;
};

console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
);
