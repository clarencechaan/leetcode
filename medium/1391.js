/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function recurse(x = 0, y = 0, dir) {
    if (x < 0 || x >= m || y < 0 || y >= n) return false;
    if (y === n - 1 && x === m - 1) {
      if (!dir) return true;
      switch (grid[y][x]) {
        case 1:
          return dir === "E" || dir === "W";
        case 2:
          return dir === "S" || dir === "N";
        case 3:
          return dir === "E" || dir === "N";
        case 4:
          return dir === "N" || dir === "W";
        case 5:
          return dir === "E" || dir === "S";
        case 6:
          return dir === "S" || dir === "W";
      }
    }

    const cell = grid[y][x];
    grid[y][x] = 0;

    switch (cell) {
      case 0:
        return false;
      case 1:
        if (!dir || dir === "E") return recurse(x + 1, y, "E");
        if (dir === "W") return recurse(x - 1, y, "W");
        return false;
      case 2:
        if (!dir || dir === "S") return recurse(x, y + 1, "S");
        if (dir === "N") return recurse(x, y - 1, "N");
        return false;
      case 3:
        if (!dir || dir === "E") return recurse(x, y + 1, "S");
        if (dir === "N") return recurse(x - 1, y, "W");
        return false;
      case 4:
        if (!dir) return recurse(x + 1, y, "E") || recurse(x, y + 1, "S");
        if (dir === "N") return recurse(x + 1, y, "E");
        if (dir === "W") return recurse(x, y + 1, "S");
        return false;
      case 5:
        if (dir === "E") return recurse(x, y - 1, "N");
        if (dir === "S") return recurse(x - 1, y, "W");
        return false;
      case 6:
        if (!dir || dir === "S") return recurse(x + 1, y, "E");
        if (dir === "W") return recurse(x, y - 1, "N");
        return false;
    }
  }

  return recurse();
};

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2],
  ])
);
