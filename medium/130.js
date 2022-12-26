/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board[0].length;
  const n = board.length;

  for (let i = 0; i < n; i++) {
    if (board[i][0] === "O") board[i][0] = "N";
    if (board[i][m - 1] === "O") board[i][m - 1] = "N";
  }

  for (let j = 0; j < m; j++) {
    if (board[0][j] === "O") board[0][j] = "N";
    if (board[n - 1][j] === "O") board[n - 1][j] = "N";
  }

  function nullifyNeighbours(x, y) {
    if (
      x >= m ||
      y >= n ||
      x < 0 ||
      y < 0 ||
      board[y][x] === "X" ||
      !board[y][x]
    )
      return;
    board[y][x] = null;
    nullifyNeighbours(x - 1, y);
    nullifyNeighbours(x + 1, y);
    nullifyNeighbours(x, y - 1);
    nullifyNeighbours(x, y + 1);
  }

  for (let i = 0; i < n; i++) {
    if (board[i][0] === "N") nullifyNeighbours(0, i);
    if (board[i][m - 1] === "N") nullifyNeighbours(m - 1, i);
  }

  for (let j = 0; j < m; j++) {
    if (board[0][j] === "N") nullifyNeighbours(j, 0);
    if (board[n - 1][j] === "N") nullifyNeighbours(j, n - 1);
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (board[i][j] === "N" || !board[i][j]) board[i][j] = "O";
      else if (board[i][j] === "O") board[i][j] = "X";
};

let board = [["O"]];
solve(board);
console.log(board);
