/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let glasses = [];
  for (let i = 0; i <= query_row; i++) glasses[i] = Array(i + 1).fill(0);

  glasses[0][0] = poured;
  for (let i = 0; i < glasses.length; i++) {
    for (let j = 0; j < glasses[i].length; j++) {
      if (glasses[i][j] > 1) {
        let overflow = glasses[i][j] - 1;
        glasses[i][j] = 1;
        if (i < glasses.length - 1) {
          glasses[i + 1][j] += overflow / 2;
          glasses[i + 1][j + 1] += overflow / 2;
        }
      }
    }
  }

  return glasses[query_row][query_glass];
};

console.log(champagneTower(2, 1, 1));
