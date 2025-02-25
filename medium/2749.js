/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
  if (num1 < num2) return -1;

  num1 = BigInt(num1);
  num2 = BigInt(num2);

  const powersOf2 = Array(61)
    .fill()
    .map((_, idx) => 2n ** BigInt(idx))
    .reverse();

  // check if it possible to break down a number into sums of powers of 2, with `x` or fewer parts
  function isPossible(x, sum) {
    if (x > sum) return false;
    let parts = 0n;
    for (let i = 0; i <= 60 && parts < x && sum > 0n; i++) {
      let num = powersOf2[i];
      while (sum >= num) {
        parts++;
        sum -= num;
      }
    }
    return parts <= x && sum === 0n;
  }

  for (let operations = 0n; operations <= 100n; operations++)
    if (isPossible(operations, num1 - num2 * operations))
      return Number(operations);

  return -1;
};
