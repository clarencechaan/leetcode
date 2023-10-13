/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let rook;
  for (let i = 0; !rook && i < 8; i++)
    for (let j = 0; !rook && j < 8; j++) if (board[i][j] === "R") rook = [i, j];

  let result = 0;
  for (let i = rook[0] + 1; i < 8 && board[i][rook[1]] !== "B"; i++)
    if (board[i][rook[1]] === "p") {
      result++;
      break;
    }
  for (let i = rook[0] - 1; i >= 0 && board[i][rook[1]] !== "B"; i--)
    if (board[i][rook[1]] === "p") {
      result++;
      break;
    }
  for (let j = rook[1] + 1; j < 8 && board[rook[0]][j] !== "B"; j++)
    if (board[rook[0]][j] === "p") {
      result++;
      break;
    }
  for (let j = rook[1] - 1; j >= 0 && board[rook[0]][j] !== "B"; j--)
    if (board[rook[0]][j] === "p") {
      result++;
      break;
    }

  return result;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
