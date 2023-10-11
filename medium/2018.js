/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  const m = board[0].length;
  const n = board.length;

  function canPlace(row, col, direction) {
    switch (direction) {
      case "R":
        for (let i = 0; i < word.length; i++)
          if (board[row][col + i] !== " " && board[row][col + i] !== word[i])
            return false;
        return (
          !board[row][col + word.length] ||
          board[row][col + word.length] === "#"
        );
      case "D":
        for (let i = 0; i < word.length; i++)
          if (
            board[row + i]?.[col] !== " " &&
            board[row + i]?.[col] !== word[i]
          )
            return false;
        return (
          !board[row + word.length]?.[col] ||
          board[row + word.length]?.[col] === "#"
        );
      case "L":
        for (let i = 0; i < word.length; i++)
          if (board[row][col - i] !== " " && board[row][col - i] !== word[i])
            return false;
        return (
          !board[row][col - word.length] ||
          board[row][col - word.length] === "#"
        );
      case "U":
        for (let i = 0; i < word.length; i++)
          if (
            board[row - i]?.[col] !== " " &&
            board[row - i]?.[col] !== word[i]
          )
            return false;
        return (
          !board[row - word.length]?.[col] ||
          board[row - word.length]?.[col] === "#"
        );
    }
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (
        (!board[i][j - 1] || board[i][j - 1] === "#") &&
        (board[i][j] === " " || board[i][j] === word[0]) &&
        canPlace(i, j, "R")
      )
        return true;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (
        (!board[i - 1]?.[j] || board[i - 1]?.[j] === "#") &&
        (board[i][j] === " " || board[i][j] === word[0]) &&
        canPlace(i, j, "D")
      )
        return true;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (
        (!board[i][j + 1] || board[i][j + 1] === "#") &&
        (board[i][j] === " " || board[i][j] === word[0]) &&
        canPlace(i, j, "L")
      )
        return true;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (
        (!board[i + 1]?.[j] || board[i + 1]?.[j] === "#") &&
        (board[i][j] === " " || board[i][j] === word[0]) &&
        canPlace(i, j, "U")
      )
        return true;

  return false;
};

console.log(
  placeWordInCrossword(
    [
      ["#", " ", "#"],
      [" ", " ", "#"],
      ["#", "c", " "],
    ],
    "abc"
  )
);
