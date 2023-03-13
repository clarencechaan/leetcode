/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  const m = board[0].length;
  const n = board.length;

  function clearShip(row, col) {
    if (row < 0 || row >= n || col < 0 || col >= m || board[row][col] !== "X")
      return;
    board[row][col] = "O";
    clearShip(row - 1, col);
    clearShip(row + 1, col);
    clearShip(row, col - 1);
    clearShip(row, col + 1);
  }

  let result = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (board[i][j] === "X") {
        result++;
        clearShip(i, j);
      }

  return result;
};

console.log(countBattleships([["."]]));
