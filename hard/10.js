/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let memo = [];
  for (let i = 0; i <= s.length; i++) memo.push([]);

  function recurse(i = 0, j = 0) {
    if (memo[i][j] !== undefined) return memo[i][j];
    let result;
    if (i >= s.length && j >= p.length) result = true;
    else if (p[j + 1] === "*")
      result =
        recurse(i, j + 2) ||
        (i < s.length && (s[i] === p[j] || p[j] === ".") && recurse(i + 1, j));
    else if (i < s.length && (s[i] === p[j] || p[j] === "."))
      result = recurse(i + 1, j + 1);
    else result = false;
    memo[i][j] = result;
    return result;
  }

  return recurse();
};

console.log(isMatch("aa", "a*"));
