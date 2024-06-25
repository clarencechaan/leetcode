/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;

  function canReach(time) {
    if (grid[0][0] > time) return false;
    const seen = new Set(["0,0"]);
    for (const str of seen) {
      const [x, y] = str.split(",").map((num) => +num);
      if (grid[y]?.[x] === undefined || grid[y][x] > time) continue;
      if (x === n - 1 && y === n - 1) return true;
      seen
        .add(`${x - 1},${y}`)
        .add(`${x + 1},${y}`)
        .add(`${x},${y - 1}`)
        .add(`${x},${y + 1}`);
    }
    return false;
  }

  let min = 0;
  let max = n * n - 1;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (canReach(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }
  return mid;
};

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
);
