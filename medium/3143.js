/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function (points, s) {
  const pointsMap = {};
  for (let i = 0; i < points.length; i++) {
    if (!pointsMap[s[i]]) pointsMap[s[i]] = [];
    pointsMap[s[i]].push(points[i]);
  }

  function getPointCount(side) {
    let total = 0;
    for (const tag in pointsMap) {
      let count = 0;
      for (const [x, y] of pointsMap[tag]) {
        if (-side <= x && x <= side && -side <= y && y <= side) count++;
        if (count >= 2) return -1;
      }
      total += count;
    }
    return total;
  }

  let min = 0;
  let max = points.reduce(
    (max, [x, y]) => Math.max(max, Math.abs(x), Math.abs(y)),
    0
  );
  let mid = Math.ceil((min + max) / 2);

  while (min < max) {
    if (getPointCount(mid) >= 0) min = mid;
    else max = mid - 1;
    mid = Math.ceil((min + max) / 2);
  }

  return Math.max(getPointCount(mid), 0);
};

console.log(
  maxPointsInsideSquare(
    [
      [0, 1],
      [0, 0],
    ],
    "aa"
  )
);
