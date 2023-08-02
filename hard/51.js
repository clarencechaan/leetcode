/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];

  function queensAttacking(a, b) {
    if (
      a[0] === b[0] ||
      a[1] === b[1] ||
      Math.abs(a[0] - b[0]) === Math.abs(a[1] - b[1])
    )
      return true;
    return false;
  }

  function recurse(queens = []) {
    if (queens.length === n) {
      result.push(queens);
      return;
    }

    for (let i = 0; i < n; i++)
      if (queens.every((queen) => !queensAttacking(queen, [queens.length, i])))
        recurse([...queens, [queens.length, i]]);
  }

  recurse();

  function convertQueensToBoard(queens) {
    let board = [];
    for (const [i, j] of queens)
      board[i] = ".".repeat(j) + "Q" + ".".repeat(n - j - 1);
    return board;
  }

  result = result.map((queens) => convertQueensToBoard(queens));

  return result;
};

console.log(solveNQueens(4));
