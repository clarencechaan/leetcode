/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // idea:
  // 1. keep deleting "()" until we can no longer do so
  // 2. compare the difference in length between `s` and our resulting string
  // doesn't work because the "()" that we delete aren't guaranteed to be connected as one substring

  // naive approach:
  // 1. for each index `i`, get the longest valid parenthesis string starting from `i`
  // naive approach works I guess

  function getParenthesisStringLength(index) {
    let val = 0;
    let length = 0;
    for (let i = index; i < s.length; i++) {
      if (s[i] === "(") val++;
      else val--;
      if (val < 0) break;
      if (val === 0) length = i - index + 1;
    }
    return length;
  }

  let result = 0;
  for (let i = 0; i < s.length; i++)
    result = Math.max(result, getParenthesisStringLength(i));
  return result;
};

console.log(longestValidParentheses("(()"));
