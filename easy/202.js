/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = [];
  let num = n;

  while (num !== 1 && !seen.includes(num)) {
    seen.push(num);
    num = happy(num);
  }

  return num === 1;
};

function happy(n) {
  return n
    .toString()
    .split("")
    .map((char) => parseInt(char))
    .reduce((sum, num) => Math.pow(num, 2) + sum, 0);
}

console.log(isHappy(19));
