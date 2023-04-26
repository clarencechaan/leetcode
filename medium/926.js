/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let totalZeros = s.replaceAll("1", "").length;
  let totalOnes = s.length - totalZeros;

  let min = Math.min(totalOnes, totalZeros);
  let zeros = 0;
  let ones = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "0") zeros++;
    else if (s[i] === "1") ones++;
    min = Math.min(min, ones + totalZeros - zeros);
  }

  return min;
};

console.log(minFlipsMonoIncr("00011000"));

// 3 cases:
//  1) flip all to 1
//  2) flip all to 0
//  3) flip left side to 0, flip right side to 1
