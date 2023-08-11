/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const n = dungeon.length;
  const m = dungeon[0].length;

  let mat = [];
  for (let i = 0; i < n; i++) mat.push([]);
  mat[0][0] = [[dungeon[0][0], dungeon[0][0]]];
  let diagonal = 1;
  while (!mat[n - 1][m - 1]) {
    let j = Math.min(diagonal, m - 1);
    let i = diagonal - j;
    while (i < n && j >= 0) {
      let pairs = new Set();
      if (i >= 1)
        for (const [sum, min] of mat[i - 1][j])
          pairs.add([sum + dungeon[i][j], Math.min(min, sum + dungeon[i][j])]);
      if (j >= 1)
        for (const [sum, min] of mat[i][j - 1])
          pairs.add([sum + dungeon[i][j], Math.min(min, sum + dungeon[i][j])]);
      for (let a of pairs)
        for (let b of pairs)
          if (a === b) continue;
          else if (b[0] <= a[0] && b[1] <= a[1]) pairs.delete(b);
      mat[i][j] = pairs;
      i++;
      j--;
    }
    diagonal++;
  }

  let max = -Infinity;
  for (const [, health] of mat[n - 1][m - 1]) max = Math.max(max, health);
  return Math.max(1, -max + 1);
};

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);
