/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function validateArr(arr) {
    return arr.every(
      (a) => a === "." || arr.filter((b) => a === b).length === 1
    );
  }

  for (const row of board) if (!validateArr(row)) return false;

  let columns = [];
  for (let i = 0; i < 9; i++) {
    columns[i] = [];
    for (let j = 0; j < 9; j++) columns[i].push(board[j][i]);
  }

  for (const column of columns) if (!validateArr(column)) return false;

  let boxes = [];
  let count = 0;
  for (let i = 0; i <= 6; i += 3)
    for (let j = 0; j <= 6; j += 3) {
      boxes[count] = [];
      for (let k = i; k < i + 3; k++)
        for (let l = j; l < j + 3; l++) boxes[count].push(board[k][l]);
      count++;
    }

  for (const box of boxes) if (!validateArr(box)) return false;

  return true;
};

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
