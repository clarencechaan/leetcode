/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const n = colors.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const left = colors[(i - 1 + n) % n];
    const mid = colors[i];
    const right = colors[(i + 1) % n];
    if (left === right && left !== mid) ans++;
  }

  return ans;
};

console.log(numberOfAlternatingGroups([1, 1, 1]));
