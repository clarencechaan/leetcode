/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const n = heightMap.length;
  const m = heightMap[0].length;

  const MIN = heightMap.reduce(
    (min, row) =>
      Math.min(
        min,
        row.reduce((min, cell) => Math.min(min, cell), 0)
      ),
    0
  );

  const MAX = heightMap.reduce(
    (max, row) =>
      Math.max(
        max,
        row.reduce((max, cell) => Math.max(max, cell), 0)
      ),
    0
  );

  const checked = Array(n)
    .fill()
    .map(() => []);

  const waterHeightMap = heightMap.map((row) => [...row]);

  function waterHeightIsValid(
    wHeight,
    x,
    y,
    seen = Array(n)
      .fill()
      .map(() => [])
  ) {
    if (heightMap[y][x] >= wHeight || seen[y][x]) return true;
    if (x === 0 || x === m - 1 || y === 0 || y === n - 1 || checked[y][x])
      return false;
    seen[y][x] = true;
    return (
      waterHeightIsValid(wHeight, x - 1, y, seen) &&
      waterHeightIsValid(wHeight, x + 1, y, seen) &&
      waterHeightIsValid(wHeight, x, y - 1, seen) &&
      waterHeightIsValid(wHeight, x, y + 1, seen)
    );
  }

  function getWaterHeight(x, y) {
    let min = MIN;
    let max = MAX;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      if (waterHeightIsValid(mid, x, y)) min = mid;
      else max = mid - 1;
      mid = Math.ceil((min + max) / 2);
    }
    return mid;
  }

  function flood(
    wHeight,
    x,
    y,
    seen = Array(n)
      .fill()
      .map(() => [])
  ) {
    if (heightMap[y][x] >= wHeight || seen[y][x]) return;
    seen[y][x] = true;
    waterHeightMap[y][x] = wHeight;
    checked[y][x] = true;
    flood(wHeight, x - 1, y, seen);
    flood(wHeight, x + 1, y, seen);
    flood(wHeight, x, y - 1, seen);
    flood(wHeight, x, y + 1, seen);
  }

  for (let y = 1; y < n - 1; y++)
    for (let x = 1; x < m - 1; x++)
      if (checked[y][x]) continue;
      else {
        const wHeight = getWaterHeight(x, y);
        flood(wHeight, x, y);
      }

  let ans = 0;
  for (let y = 1; y < n - 1; y++)
    for (let x = 1; x < m - 1; x++)
      ans += waterHeightMap[y][x] - heightMap[y][x];
  return ans;
};

console.log(
  trapRainWater([
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
    [2, 3, 3, 2, 3, 1],
  ])
);
