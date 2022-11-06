/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  let sorted = pairs.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  sorted = sorted.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  let count = 0;
  let curr = null;
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || sorted[i][0] > curr) {
      count++;
      curr = sorted[i][1];
    }
  }
  return count;
};

console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5],
  ])
);
