/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (const row of image) row.reverse();

  for (let i = 0; i < image.length; i++)
    for (let j = 0; j < image[0].length; j++)
      if (image[i][j] === 0) image[i][j] = 1;
      else image[i][j] = 0;

  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
