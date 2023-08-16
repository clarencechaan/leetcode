/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let dp = [];
  function countPowerOfTen(power) {
    if (power <= 1) return power + 1;
    if (dp[power]) return dp[power];
    let value = 10 * (countPowerOfTen(power - 1) - 1) + 10 ** (power - 1) + 1;
    dp[power] = value;
    return value;
  }

  let str = n.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") continue;
    else if (str[i] === "1")
      sum +=
        countPowerOfTen(str.length - 1 - i) + (parseInt(str.slice(i + 1)) || 0);
    else
      sum +=
        str[i] * (countPowerOfTen(str.length - 1 - i) - 1) +
        10 ** (str.length - 1 - i);
  }

  return sum;
};

console.log(countDigitOne(13));
