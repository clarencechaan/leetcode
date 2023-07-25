/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  function distance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  let network = new Set([points.pop()]);
  points = new Set(points);

  let result = 0;
  while (points.size) {
    let min = Infinity;
    let pointToAdd;
    for (const pointA of network)
      for (const pointB of points)
        if (distance(pointA, pointB) < min) {
          min = distance(pointA, pointB);
          pointToAdd = pointB;
        }
    result += min;
    network.add(pointToAdd);
    points.delete(pointToAdd);
  }

  return result;
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
