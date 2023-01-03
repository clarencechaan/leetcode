/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const cx1 = Math.max(ax1, bx1);
  const cy1 = Math.max(ay1, by1);
  const cx2 = Math.min(ax2, bx2);
  const cy2 = Math.min(ay2, by2);

  let result = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1);

  if (cx2 > cx1 && cy2 > cy1) result -= (cx2 - cx1) * (cy2 - cy1);
  return result;
};
