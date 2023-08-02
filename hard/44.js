/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let memo = [];
  for (let i = 0; i <= s.length; i++) memo.push([]);

  function recurse(i = 0, j = 0) {
    if (i >= s.length && j >= p.length) return true;
    if (memo[i][j] !== undefined) return memo[i][j];

    let result = false;
    if (s[i] === p[j] || (s[i] && p[j] === "?")) result = recurse(i + 1, j + 1);
    if (p[j] === "*") result = (s[i] && recurse(i + 1, j)) || recurse(i, j + 1);

    memo[i][j] = result;
    return result;
  }

  return recurse();
};

console.log(isMatch("aa", "*"));
