/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  function makeBoard() {
    let board = [];
    for (let i = 0; i < n; i++) board.push(Array(n).fill(0));
    return board;
  }

  let board = makeBoard();
  board[row][column] = 1;

  function cloneDeep(mat) {
    let result = [];
    for (const row of mat) result.push([...row]);
    return result;
  }

  for (let moves = 0; moves < k; moves++) {
    let prev = cloneDeep(board);
    board = makeBoard();
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (prev[i][j]) {
          if (board[i - 1]?.[j - 2] !== undefined)
            board[i - 1][j - 2] += prev[i][j] / 8;
          if (board[i - 2]?.[j - 1] !== undefined)
            board[i - 2][j - 1] += prev[i][j] / 8;
          if (board[i - 2]?.[j + 1] !== undefined)
            board[i - 2][j + 1] += prev[i][j] / 8;
          if (board[i - 1]?.[j + 2] !== undefined)
            board[i - 1][j + 2] += prev[i][j] / 8;
          if (board[i + 1]?.[j + 2] !== undefined)
            board[i + 1][j + 2] += prev[i][j] / 8;
          if (board[i + 2]?.[j + 1] !== undefined)
            board[i + 2][j + 1] += prev[i][j] / 8;
          if (board[i + 2]?.[j - 1] !== undefined)
            board[i + 2][j - 1] += prev[i][j] / 8;
          if (board[i + 1]?.[j - 2] !== undefined)
            board[i + 1][j - 2] += prev[i][j] / 8;
        }
  }

  return board.reduce(
    (sum, row) => sum + row.reduce((sum, prob) => sum + prob, 0),
    0
  );
};

console.log(knightProbability(3, 2, 0, 0));
