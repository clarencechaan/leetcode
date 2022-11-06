/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let max = 0;
  let curr = 0;
  for (const char of s) {
    if (char === "(") curr++;
    else if (char === ")") curr--;
    if (curr > max) max = curr;
  }

  return max;
};

console.log(maxDepth("(1)+((2))+(((3)))"));
