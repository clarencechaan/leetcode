/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  let board1D = [];
  for (let i = 0; i < n; i++)
    if (i % 2 === 0) board1D.push(...board[n - 1 - i]);
    else board1D.push(...board[n - 1 - i].reverse());
  let movesBoard = Array(n * n).fill(Infinity);
  movesBoard[0] = 0;

  let currMoves = 0;
  function nextMovesBoard() {
    let prev = [...movesBoard];
    let done = true;
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] === currMoves) {
        {
          for (let j = 1; j <= 6 && i + j < n * n; j++) {
            if (board1D[i + j] === -1)
              movesBoard[i + j] = Math.min(prev[i] + 1, movesBoard[i + j]);
            else
              movesBoard[board1D[i + j] - 1] = Math.min(
                prev[i] + 1,
                movesBoard[board1D[i + j] - 1]
              );
          }
          done = false;
        }
      }
    }
    currMoves++;
    if (done) movesBoard[n * n - 1] = -1;
  }

  while (movesBoard[n * n - 1] === Infinity) nextMovesBoard();
  return movesBoard[n * n - 1];
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);
