/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let result = 0;

  let net = 0;
  for (const char of s) {
    if (char === "R") net++;
    else net--;
    if (net === 0) result++;
  }

  return result;
};

console.log(balancedStringSplit("LLLLRRRR"));
