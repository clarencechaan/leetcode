/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const n = img1.length;

  let max = 0;
  for (let x = 1 - n; x < n; x++)
    for (let y = 1 - n; y < n; y++) {
      let sum = 0;
      for (let i = y < 0 ? -y : 0; i < n && i + y < n; i++)
        for (let j = x < 0 ? -x : 0; j < n && j + x < n; j++)
          sum += img1[i][j] && img2[i + y][j + x];
      max = Math.max(sum, max);
    }

  return max;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
