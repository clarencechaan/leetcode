/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const n = box.length;
  const m = box[0].length;

  for (const row of box) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "#" && row[i + 1] === ".") {
        [row[i], row[i + 1]] = [row[i + 1], row[i]];
        i -= 2;
      }
    }
  }

  let result = [];
  for (let i = 0; i < m; i++) result.push([]);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) result[j][n - 1 - i] = box[i][j];

  return result;
};

console.log(rotateTheBox([["#", ".", "#"]]));
