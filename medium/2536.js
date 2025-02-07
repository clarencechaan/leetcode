/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const mat = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  function add1(row1, col1, row2, col2) {
    for (let i = row1; i <= row2; i++)
      for (let j = col1; j <= col2; j++) mat[i][j]++;
  }

  queries.forEach((query) => add1(...query));

  return mat;
};

console.log(
  rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ])
);
