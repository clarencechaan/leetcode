/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  if (!s) return 0.5;

  let strArr = [];
  let childStr = "";
  let open = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "(") open++;
    else if (s[i] === ")") open--;
    childStr += s[i] || "";

    if (childStr && !open) {
      strArr.push(childStr);
      childStr = "";
    }
  }

  let result = 0;
  for (const childStr of strArr)
    result +=
      2 * scoreOfParentheses(childStr.substring(1, childStr.length - 1));

  return result;
};

console.log(scoreOfParentheses("()()"));
