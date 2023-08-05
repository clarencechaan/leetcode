/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let memo = [];
  for (let i = 0; i <= s.length; i++) memo.push([]);

  function recurse(i = 0, j = 0) {
    if (memo[i][j] !== undefined) return memo[i][j];
    let result;
    if (s.length - i < t.length - j) result = 0;
    else if (s.slice(i) === t.slice(j)) result = 1;
    else
      result = (s[i] === t[j] ? recurse(i + 1, j + 1) : 0) + recurse(i + 1, j);
    memo[i][j] = result;
    return result;
  }

  return recurse();
};

console.log(numDistinct("babgbag", "bag"));
