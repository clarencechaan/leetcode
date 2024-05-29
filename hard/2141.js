/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => (a > b ? -1 : 1));
  let excess = batteries.slice(n).reduce((sum, b) => sum + b, 0);

  let result = batteries[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    const diff = (batteries[i - 1] || Infinity) - batteries[i];
    const length = n - i;
    const toAdd = Math.min(diff, Math.floor(excess / length));
    result += toAdd;
    excess -= toAdd * length;
  }

  return result;
};

console.log(maxRunTime(2, [3, 3, 3]));
