/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let beautifulMat = [];
  let map = {};

  for (let i = 1; i <= n; i++) {
    let beautiful = Array(n).fill(" ");
    map[i] = new Set();
    for (let j = 1; j <= n; j++)
      if (i % j === 0 || j % i === 0) {
        beautiful[j - 1] = "X";
        map[i].add(j);
      }
    beautifulMat[i - 1] = beautiful;
  }

  function getPathCount(mat, row = 0, indices = new Set()) {
    let sum = 0;
    if (row === 0) {
      for (let i = 0; i < n; i++) if (!indices.has(i)) sum++;
    } else if (row > 0) {
      for (let i = 0; i < n; i++) {
        if (mat[row][i] && !indices.has(i))
          sum += getPathCount(mat, row - 1, new Set(indices).add(i));
      }
    }
    return sum;
  }

  let paths = [Array(n).fill(1)];
  for (let i = 2; i <= n; i++) {
    paths[i - 1] = Array(n).fill(0);
    for (let j = 1; j <= n; j++) {
      if (beautifulMat[i - 1][j - 1] === "X")
        paths[i - 1][j - 1] = getPathCount(paths, i - 2, new Set([j - 1]));
    }
  }

  return paths[paths.length - 1].reduce((sum, val) => sum + val, 0);
};

console.log(countArrangement(5));
