/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
  let sum = 0;
  let num = n;
  while (num >= 1) {
    let operands = [num, Math.max(num - 1, 1), Math.max(num - 2, 1)];
    let add = Math.floor((operands[0] * operands[1]) / operands[2]);
    if (n === num) sum += add;
    else sum -= add;
    sum += Math.max(num - 3, 0);
    num -= 4;
  }

  return sum;
};

console.log(clumsy(4));
