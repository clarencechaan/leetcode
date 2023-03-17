/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) =>
    a[0] > b[0] ? 1 : a[0] === b[0] ? (a[1] > b[1] ? 1 : -1) : -1
  );
  let overlaps = [];

  function balloonsOverlap(a, b) {
    if (a[0] >= b[0] && a[0] <= b[1]) {
      return [a[0], Math.min(a[1], b[1])];
    } else if (a[1] >= b[0] && a[1] <= b[1]) {
      return [b[0], a[1]];
    } else if (b[0] >= a[0] && b[0] <= a[1]) {
      return [b[0], Math.min(a[1], b[1])];
    } else if (b[1] >= a[0] && b[1] <= a[1]) {
      return [a[0], b[1]];
    } else return null;
  }

  for (const point of points) {
    const idx = overlaps.findIndex((overlap) =>
      balloonsOverlap(point, overlap)
    );
    if (idx !== -1) overlaps[idx] = balloonsOverlap(overlaps[idx], point);
    else overlaps.push(point);
  }

  return overlaps.length;
};

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);
