/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const isXOverlapped =
    (rec2[0] < rec1[2] && rec2[0] > rec1[0]) ||
    (rec2[2] < rec1[2] && rec2[2] > rec1[0]) ||
    (rec1[0] < rec2[2] && rec1[0] > rec2[0]) ||
    (rec1[2] < rec2[2] && rec1[2] > rec2[0]);

  const isYOverlapped =
    (rec2[1] < rec1[3] && rec2[1] > rec1[1]) ||
    (rec2[3] < rec1[3] && rec2[3] > rec1[1]) ||
    (rec1[1] < rec2[3] && rec1[1] > rec2[1]) ||
    (rec1[3] < rec2[3] && rec1[3] > rec2[1]);

  return isXOverlapped && isYOverlapped;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
