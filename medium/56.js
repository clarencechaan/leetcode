/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let sorted = [...intervals].sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] >= sorted[i + 1][0]) {
      sorted[i][1] = Math.max(sorted[i + 1][1], sorted[i][1]);
      sorted = [...sorted.slice(0, i + 1), ...sorted.slice(i + 2)];
      i--;
    }
  }

  return sorted;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
