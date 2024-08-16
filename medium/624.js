/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  const mins = arrays.map((arr) => arr[0]);
  const maxs = arrays.map((arr) => arr[arr.length - 1]);

  let min = mins[0];
  let max = maxs[0];
  let ans = 0;

  for (let i = 1; i < arrays.length; i++) {
    ans = Math.max(ans, maxs[i] - min, max - mins[i]);
    min = Math.min(min, mins[i]);
    max = Math.max(max, maxs[i]);
  }

  return ans;
};

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
