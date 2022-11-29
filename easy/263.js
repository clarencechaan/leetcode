/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) return true;
  if (n < 1) return false;
  return (
    (n % 2 == 0 && isUgly(n / 2)) ||
    (n % 3 === 0 && isUgly(n / 3)) ||
    (n % 5 === 0 && isUgly(n / 5))
  );
};

console.log(isUgly(6));
