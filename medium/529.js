/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  if (board[click[0]][click[1]] === "M") {
    board[click[0]][click[1]] = "X";
    return board;
  }

  const m = board[0].length;
  const n = board.length;

  function revealAdjacent(r, c) {
    if (r < 0 || r >= n || c < 0 || c >= m || board[r][c] !== "E") return;

    let mineCount =
      (board[r - 1]?.[c] === "M" ? 1 : 0) +
      (board[r + 1]?.[c] === "M" ? 1 : 0) +
      (board[r][c - 1] === "M" ? 1 : 0) +
      (board[r][c + 1] === "M" ? 1 : 0) +
      (board[r - 1]?.[c - 1] === "M" ? 1 : 0) +
      (board[r - 1]?.[c + 1] === "M" ? 1 : 0) +
      (board[r + 1]?.[c - 1] === "M" ? 1 : 0) +
      (board[r + 1]?.[c + 1] === "M" ? 1 : 0);

    if (mineCount) {
      board[r][c] = "" + mineCount;
    } else {
      board[r][c] = "B";
      revealAdjacent(r - 1, c);
      revealAdjacent(r + 1, c);
      revealAdjacent(r, c - 1);
      revealAdjacent(r, c + 1);
      revealAdjacent(r - 1, c - 1);
      revealAdjacent(r - 1, c + 1);
      revealAdjacent(r + 1, c - 1);
      revealAdjacent(r + 1, c + 1);
    }
  }

  revealAdjacent(click[0], click[1]);
  return board;
};

console.log(
  updateBoard(
    [
      ["B", "1", "E", "1", "B"],
      ["B", "1", "M", "1", "B"],
      ["B", "1", "1", "1", "B"],
      ["B", "B", "B", "B", "B"],
    ],
    [1, 2]
  )
);
