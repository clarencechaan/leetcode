/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let arr = (n.toString() + (2 * n).toString() + (3 * n).toString())
    .split("")
    .sort((a, b) => (a > b ? 1 : -1));
  if (arr.length > 9) return false;
  for (let i = 0; i < 9; i++) if (arr[i] != i + 1) return false;
  return true;
};

console.log(isFascinating(192));
