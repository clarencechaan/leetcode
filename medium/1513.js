/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  let streaks = [];
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "1") count++;
    else {
      if (count) {
        streaks.push(count);
        count = 0;
      }
    }
  }

  let result = 0n;
  for (let len of streaks) {
    len = BigInt(len);
    result += (len * (len + 1n)) / 2n;
  }

  result = Number(result % (10n ** 9n + 7n));
  return result;
};

console.log(numSub("0110111"));
