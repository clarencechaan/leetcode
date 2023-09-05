/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let str = "";
  for (let i = 1; i <= n; i++) str += i.toString(2);

  let last = [0, 1];
  function twoPowerOf(x) {
    let diff = x - last[0];
    let val = (2 ** diff * last[1]) % (10 ** 9 + 7);
    last = [x, val];
    return val;
  }

  let num = 0;
  for (let i = 0; i <= str.length; i++)
    if (str[str.length - 1 - i] === "1") num = num + twoPowerOf(i);

  num = num % (10 ** 9 + 7);
  return num;
};

console.log(concatenatedBinary(12));
