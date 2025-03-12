/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  function distance(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
  }

  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const freq = {};
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const dist = distance(points[i], points[j]);
      freq[dist] = (freq[dist] || 0) + 1;
    }
    for (const dist in freq) result += freq[dist] * (freq[dist] - 1);
  }
  return result;
};
