/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let paths = [];
  for (let i = 0; i < m; i++) paths.push([]);
  for (let i = 0; i < n; i++) paths[m - 1][i] = 1;
  for (let i = 0; i < m; i++) paths[i][n - 1] = 1;

  for (let i = m - 2; i >= 0; i--)
    for (let j = n - 2; j >= 0; j--)
      paths[i][j] = paths[i + 1][j] + paths[i][j + 1];

  return paths[0][0];
};

console.log(uniquePaths(19, 13));
