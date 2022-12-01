/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 0; i * i <= num; i++) if (i * i === num) return true;
  return false;
};

console.log(isPerfectSquare(2147395600));
