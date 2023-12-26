/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const n = land.length;
  const m = land[0].length;

  function getCoords(x, y) {
    let result = [];
    while (land[y - 1]?.[x] === 1) y--;
    result[0] = y;
    while (land[y][x - 1] === 1) x--;
    result[1] = x;
    while (land[y + 1]?.[x] === 1) y++;
    result[2] = y;
    while (land[y][x + 1] === 1) x++;
    result[3] = x;
    return result;
  }

  function markFarmland(x, y) {
    if (land[y]?.[x] !== 1) return;
    land[y][x] = "X";
    markFarmland(x - 1, y);
    markFarmland(x + 1, y);
    markFarmland(x, y - 1);
    markFarmland(x, y + 1);
  }

  let result = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (land[i][j] === 1) {
        result.push(getCoords(j, i));
        markFarmland(j, i);
      }
  return result;
};

console.log(
  findFarmland([
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ])
);
