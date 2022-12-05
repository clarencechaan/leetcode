/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const sColor = image[sr][sc];
  if (sColor === color) return image;

  (function recurse(x, y) {
    if (image[y]?.[x] !== sColor) return;
    image[y][x] = color;
    recurse(x - 1, y);
    recurse(x + 1, y);
    recurse(x, y - 1);
    recurse(x, y + 1);
  })(sc, sr);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
