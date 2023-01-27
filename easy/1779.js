/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  function manhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  let min = Infinity;
  let idx = -1;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] !== x && points[i][1] !== y) continue;
    const man = manhattan(x, y, points[i][0], points[i][1]);
    if (man < min) {
      min = man;
      idx = i;
    }
  }

  return idx;
};

console.log(nearestValidPoint(3, 4, [[2, 3]]));
