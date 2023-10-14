/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  function filterGrid() {
    let filtered = [];
    for (let i = 0; i < n; i++) filtered.push(Array(m).fill(0));
    filtered[n - 1][m - 1] = 1;
    function recurse(row = 0, col = 0) {
      if (row === n - 1 && col === m - 1) return 1;
      if (filtered[row][col]) return filtered[row][col];
      let result = grid[row + 1]?.[col] && recurse(row + 1, col);
      result = (grid[row][col + 1] && recurse(row, col + 1)) || result || 0;
      filtered[row][col] = result;
      return result;
    }
    recurse();
    return filtered;
  }

  function canDisconnect() {
    let memo = [[], []];
    for (let i = 0; i < n; i++) {
      memo[0].push([]);
      memo[1].push([]);
    }
    function recurse(row, col, switchUsed = 0) {
      if (memo[switchUsed][row][col] !== undefined)
        return memo[switchUsed][row][col];
      if (
        (row === n - 1 && col === m - 1) ||
        (row === 0 && col === 0) ||
        row >= n ||
        row < 0 ||
        col >= m ||
        col < 0
      )
        return false;
      if (grid[row][col]) {
        if (switchUsed) return false;
        switchUsed = 1;
      }
      if (col === 0 || row === n - 1) return true;
      let result =
        recurse(row + 1, col, switchUsed) ||
        recurse(row, col - 1, switchUsed) ||
        recurse(row + 1, col - 1, switchUsed);
      memo[switchUsed][row][col] = result;
      return result;
    }

    for (let i = 1; i < m; i++) if (recurse(0, i)) return true;
    for (let i = 1; i < n; i++) if (recurse(i, m - 1)) return true;

    return false;
  }

  grid = filterGrid();
  return canDisconnect();
};

console.log(
  isPossibleToCutPath([
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ])
);
