/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  (function recurse(m, str = "", count = 0) {
    if (m === 0 && str && count === 0) result.push(str);
    else if (m === 0) return;
    else if (count < 0) return;
    else {
      recurse(m - 1, str + "(", count + 1);
      recurse(m - 1, str + ")", count - 1);
    }
  })(2 * n);

  return result;
};

console.log(generateParenthesis(3));
