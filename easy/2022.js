/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  let result = [];
  for (let i = 0; i < m; i++) result.push([]);

  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--) result[i][j] = original.pop();

  return result;
};

console.log(construct2DArray([1, 2, 3], 1, 3));
