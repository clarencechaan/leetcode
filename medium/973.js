/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  return points
    .sort((a, b) =>
      Math.sqrt(a[0] ** 2 + a[1] ** 2) > Math.sqrt(b[0] ** 2 + b[1] ** 2)
        ? 1
        : -1
    )
    .slice(0, k);
};
