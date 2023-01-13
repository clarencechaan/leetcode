/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // fill board
  for (let i = 0; i < moves.length; i += 2)
    board[moves[i][0]][moves[i][1]] = "X";
  for (let i = 1; i < moves.length; i += 2)
    board[moves[i][0]][moves[i][1]] = "O";

  // check if X is winner
  if (
    (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
    (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
    (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
    (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
    (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
    (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
    (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
    (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X")
  )
    return "A";

  // check if O is winner
  if (
    (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
    (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
    (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
    (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
    (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
    (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
    (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
    (board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O")
  )
    return "B";

  // check if game is pending
  for (const row of board) for (const cell of row) if (!cell) return "Pending";

  // game is a draw
  return "Draw";
};

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
);
