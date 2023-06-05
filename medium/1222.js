/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  let board = [];
  for (let i = 0; i < 8; i++) board.push(Array(8).fill(null));
  for (const [x, y] of queens) board[y][x] = "Q";

  let result = [];
  let [x, y] = king;

  function getAttackingQueen(xDir, yDir) {
    for (let i = 1; i <= 8; i++) {
      let x2 = x + i * xDir;
      let y2 = y + i * yDir;
      if (x2 < 0 || x2 >= 8 || y2 < 0 || y2 >= 8) return null;
      if (board[y2][x2]) return [x2, y2];
    }
  }

  for (let dir1 = -1; dir1 <= 1; dir1++)
    for (let dir2 = -1; dir2 <= 1; dir2++)
      if (!dir1 && !dir2) continue;
      else {
        let coords = getAttackingQueen(dir1, dir2);
        if (coords) result.push(coords);
      }

  return result;
};

console.log(
  queensAttacktheKing(
    [
      [0, 1],
      [1, 0],
      [4, 0],
      [0, 4],
      [3, 3],
      [2, 4],
    ],
    [0, 0]
  )
);
