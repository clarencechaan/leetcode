/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let open = 0;

  for (const char of s) {
    if (char === "(") {
      if (open > 0) result += char;
      open++;
    } else if (char === ")") {
      if (open > 1) result += char;
      open--;
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())(()(()))"));
