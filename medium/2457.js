/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  function isBeautiful(num) {
    num = num.toString();
    let sum = 0;
    for (const char of num) {
      sum += parseInt(char);
      if (sum > target) return false;
    }
    return true;
  }

  let arr = n
    .toString()
    .split("")
    .map((char) => parseInt(char));
  let x = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (isBeautiful(n + x)) return x;
    let add = (10 - arr[arr.length - 1 - i]) * 10 ** i;
    x += add;
    arr[arr.length - 2 - i]++;
  }
};

console.log(makeIntegerBeautiful(16, 6));
