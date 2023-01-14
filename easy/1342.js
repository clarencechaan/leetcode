/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  let n = num;
  while (n) {
    if (n % 2 === 0) n /= 2;
    else n--;
    steps++;
  }

  return steps;
};

console.log(numberOfSteps(123));
