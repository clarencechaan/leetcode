/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  function pointsOnSlope(point1, point2) {
    let count = 2;
    const m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
    for (const point of points)
      if (point === point1 || point === point2) continue;
      else if (m === (point[1] - point1[1]) / (point[0] - point1[0])) count++;
    return count;
  }

  let max = 1;
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++)
      max = Math.max(max, pointsOnSlope(points[i], points[j]));

  return max;
};

console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
