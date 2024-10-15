/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  let numStartingWhite = 0;
  let ans = 0;

  while (s[numStartingWhite] === "0") numStartingWhite++;

  for (let i = numStartingWhite; i < s.length; i++)
    if (s[i] === "0") {
      ans += i - numStartingWhite;
      numStartingWhite++;
    }

  return ans;
};

console.log(minimumSteps("101"));
