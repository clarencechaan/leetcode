/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function (image, threshold) {
  const n = image.length;
  const m = image[0].length;

  function isRegion(x, y) {
    if (y + 3 > n) return false;
    if (x + 3 > m) return false;
    for (let i = 0; i < 3; i++) {
      if (Math.abs(image[y + i][x] - image[y + i][x + 1]) > threshold)
        return false;
      if (Math.abs(image[y + i][x + 1] - image[y + i][x + 2]) > threshold)
        return false;
      if (Math.abs(image[y][x + i] - image[y + 1][x + i]) > threshold)
        return false;
      if (Math.abs(image[y + 1][x + i] - image[y + 2][x + i]) > threshold)
        return false;
    }
    return true;
  }

  function getRegion(x, y) {
    return [
      image[y].slice(x, x + 3),
      image[y + 1].slice(x, x + 3),
      image[y + 2].slice(x, x + 3),
    ];
  }

  function getAverageIntensity(region) {
    let sum = 0;
    for (const row of region) for (const cell of row) sum += cell;
    return Math.floor(sum / 9);
  }

  const intensities = Array(n)
    .fill()
    .map(() =>
      Array(m)
        .fill()
        .map(() => [])
    );

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (isRegion(x, y)) {
        const region = getRegion(x, y);
        const intensity = getAverageIntensity(region);
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            intensities[y + i][x + j].push(intensity);
          }
        }
      }
    }
  }

  const result = image.map((row) => [...row]);

  for (let y = 0; y < n; y++)
    for (let x = 0; x < m; x++) {
      if (!intensities[y][x].length) continue;
      const avg = Math.floor(
        intensities[y][x].reduce((sum, val) => sum + val, 0) /
          intensities[y][x].length
      );
      result[y][x] = avg;
    }

  return result;
};
