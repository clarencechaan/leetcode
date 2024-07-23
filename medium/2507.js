/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  function getPFSum(x) {
    let sum = 0;
    for (let i = 2; i <= x && x > 1; i++)
      while (x % i === 0) {
        x /= i;
        sum += i;
      }
    return sum;
  }

  while (n !== getPFSum(n)) n = getPFSum(n);
  return n;
};

console.log(smallestValue(15));
