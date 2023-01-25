/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let maxLen = 0;
  for (const rectangle of rectangles)
    maxLen = Math.max(Math.min(rectangle[0], rectangle[1]), maxLen);

  let result = 0;
  for (const rectangle of rectangles)
    if (rectangle[0] >= maxLen && rectangle[1] >= maxLen) result++;

  return result;
};

console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);
