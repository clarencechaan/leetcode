/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  let pairValueMap = { 0: { [m - 1]: grid[0][0] + grid[0][m - 1] } };

  for (let i = 1; i < n; i++) {
    let next = {};
    for (let x in pairValueMap) {
      x = parseInt(x);
      next[x] = {};
      if (x - 1 >= 0) next[x - 1] = {};
      if (x + 1 < m - 1) next[x + 1] = {};
      for (let y in pairValueMap[x]) {
        y = parseInt(y);
        if (x - 1 >= 0) {
          next[x - 1][y - 1] = 0;
          next[x - 1][y] = 0;
          if (y + 1 < m) next[x - 1][y + 1] = 0;
        }
        if (y - 1 > x) next[x][y - 1] = 0;
        next[x][y] = 0;
        if (y + 1 < m) next[x][y + 1] = 0;
        if (x + 1 < m - 1) {
          if (x + 1 < y - 1) next[x + 1][y - 1] = 0;
          if (x + 1 < y) next[x + 1][y] = 0;
          if (y + 1 < m) next[x + 1][y + 1] = 0;
        }
      }
    }
    for (let x in next) {
      x = parseInt(x);
      for (let y in next[x]) {
        y = parseInt(y);
        next[x][y] =
          grid[i][x] +
          grid[i][y] +
          Math.max(
            pairValueMap[x - 1]?.[y - 1] || 0,
            pairValueMap[x - 1]?.[y] || 0,
            pairValueMap[x - 1]?.[y + 1] || 0,
            pairValueMap[x]?.[y - 1] || 0,
            pairValueMap[x]?.[y] || 0,
            pairValueMap[x]?.[y + 1] || 0,
            pairValueMap[x + 1]?.[y - 1] || 0,
            pairValueMap[x + 1]?.[y] || 0,
            pairValueMap[x + 1]?.[y + 1] || 0
          );
      }
    }
    pairValueMap = next;
  }

  let max = 0;
  for (let x in pairValueMap)
    for (let y in pairValueMap[x]) max = Math.max(max, pairValueMap[x][y]);
  return max;
};

console.log(
  cherryPickup([
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
  ])
);
