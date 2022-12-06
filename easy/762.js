/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num - 1; i++) if (num % i === 0) return false;
    return true;
  }

  let count = 0;
  for (let i = left; i <= right; i++) {
    if (
      isPrime(
        i
          .toString(2)
          .split("")
          .filter((char) => char === "1").length
      )
    )
      count++;
  }
  return count;
};

console.log(countPrimeSetBits(10, 15));
