/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  function isNoZero(n) {
    return n.toString().replace("0", "") === n.toString();
  }

  for (let i = 1; i < n; i++)
    if (isNoZero(i) && isNoZero(n - i)) return [i, n - i];
};

console.log(getNoZeroIntegers(11));
