/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closing = { "(": ")", "[": "]", "{": "}" };
  let stack = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else if (closing[stack.pop()] !== char) return false;
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
