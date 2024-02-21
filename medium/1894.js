/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((sum, c) => sum + c, 0);
  k = k % sum;

  let idx = 0;
  while (k >= chalk[idx]) {
    k -= chalk[idx];
    idx = (idx + 1) % chalk.length;
  }

  return idx;
};

console.log(chalkReplacer([5, 1, 5], 22));
