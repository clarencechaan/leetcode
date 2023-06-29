/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  function pointOnRectangleClosestToCircle() {
    let x;
    let y;
    if (xCenter < x1) x = x1;
    else if (x2 < xCenter) x = x2;
    else x = xCenter;
    if (yCenter < y1) y = y1;
    else if (y2 < yCenter) y = y2;
    else y = yCenter;
    return [x, y];
  }

  function isPointInCircle([x, y]) {
    return (
      Math.sqrt(Math.abs(x - xCenter) ** 2 + Math.abs(y - yCenter) ** 2) <=
      radius
    );
  }

  return isPointInCircle(pointOnRectangleClosestToCircle());
};

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1));
