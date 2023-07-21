/**
 * @param {string} s
 * @return {number}
 */
var numWays = function (s) {
  let totalOnes = s.replaceAll("0", "").length;
  if (totalOnes % 3 !== 0) return 0;
  if (totalOnes === 0)
    return (((s.length - 1) * (s.length - 2)) / 2) % (10 ** 9 + 7);
  let third = totalOnes / 3;

  let split1 = 0;
  let split2 = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") count++;
    if (count === third) split1++;
    else if (count === 2 * third) split2++;
  }

  return (split1 * split2) % (10 ** 9 + 7);
};

console.log(numWays("10101"));
