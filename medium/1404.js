/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let num = 0n;
  for (let i = 0; i < s.length; i++)
    if (s[s.length - 1 - i] === "1") num += 2n ** BigInt(i);

  for (let i = 0; ; i++) {
    if (num === 1n) return i;
    else if (num % 2n === 0n) num = num / 2n;
    else num = num + 1n;
  }
};

console.log(numSteps("1101"));
