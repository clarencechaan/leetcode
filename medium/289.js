/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  function numOfLivingNeighbours(x, y) {
    return (
      (board[y - 1]?.[x] || 0) +
      (board[y + 1]?.[x] || 0) +
      (board[y - 1]?.[x - 1] || 0) +
      (board[y - 1]?.[x + 1] || 0) +
      (board[y + 1]?.[x + 1] || 0) +
      (board[y + 1]?.[x - 1] || 0) +
      (board[y][x - 1] || 0) +
      (board[y][x + 1] || 0)
    );
  }

  const m = board[0].length;
  const n = board.length;

  let modifications = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      let livingNeighbours = numOfLivingNeighbours(j, i);
      if (board[i][j] && (livingNeighbours < 2 || livingNeighbours > 3))
        modifications.push([j, i, 0]);
      else if (!board[i][j] && livingNeighbours === 3)
        modifications.push([j, i, 1]);
    }

  for (const [x, y, cell] of modifications) board[y][x] = cell;
};

let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);
console.log(board);
