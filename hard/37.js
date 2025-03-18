/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function isValid(x, y, num) {
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === num) return false;
      if (board[i][x] === num) return false;
    }

    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (board[startY + i][startX + j] === num) return false;

    return true;
  }

  function solve(x = 0, y = 0) {
    if (y === 9) return true;
    const nextX = (x + 1) % 9;
    const nextY = nextX === 0 ? y + 1 : y;

    if (board[y][x] !== ".") return solve(nextX, nextY);

    for (let num = 1; num <= 9; num++) {
      const str = num.toString();
      if (!isValid(x, y, str)) continue;
      board[y][x] = str;
      const isSolved = solve(nextX, nextY);
      if (isSolved) return true;
      board[y][x] = ".";
    }

    return false;
  }

  solve();
};
