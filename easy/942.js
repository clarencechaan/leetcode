/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let min = 0;
  let max = s.length;

  let result = [];
  for (const char of s)
    if (char === "I") {
      result.push(min);
      min++;
    } else if (char === "D") {
      result.push(max);
      max--;
    }
  result.push(min);

  return result;
};

console.log(diStringMatch("DDI"));
