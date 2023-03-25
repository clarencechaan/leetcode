/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let borders = [];
  for (const row of wall) {
    let sum = 0;
    let arr = [];
    for (const brick of row) {
      sum += brick;
      arr.push(sum);
    }
    arr.pop();
    borders.push(arr);
  }

  let borderFreq = {};
  for (const row of borders)
    for (const border of row)
      borderFreq[border] = (borderFreq[border] || 0) + 1;

  let max = 0;
  for (const border in borderFreq) max = Math.max(max, borderFreq[border] || 0);

  return wall.length - max;
};

console.log(leastBricks([[1], [1], [1]]));
