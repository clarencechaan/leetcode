/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++)
    if (
      ranges.every(
        (range) =>
          (range[0] > i && range[1] > i) || (range[0] < i && range[1] < i)
      )
    )
      return false;

  return true;
};
