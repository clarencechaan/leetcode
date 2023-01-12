/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  coordinates
    .sort((a, b) => (a[1] > b[1] ? 1 : -1))
    .sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let i = 2; i < coordinates.length; i++) {
    const slope1 =
      (coordinates[i - 1][1] - coordinates[i - 2][1]) /
      (coordinates[i - 1][0] - coordinates[i - 2][0]);
    const slope2 =
      (coordinates[i][1] - coordinates[i - 1][1]) /
      (coordinates[i][0] - coordinates[i - 1][0]);
    if (slope1 !== slope2) return false;
  }

  return true;
};

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
