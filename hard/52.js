/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let result = 0;

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
      result++;
      return;
    }

    for (let i = 0; i < n; i++)
      if (queens.every((queen) => !queensAttacking(queen, [queens.length, i])))
        recurse([...queens, [queens.length, i]]);
  }

  recurse();

  return result;
};

console.log(totalNQueens(4));
