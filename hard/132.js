/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;

  function isPalindrome(left = 0, right = n) {
    for (let i = 0; i < (right - left) / 2; i++)
      if (s[left + i] !== s[right - 1 - i]) return false;
    return true;
  }

  let memo = [];
  function recurse(left = 0) {
    if (memo[left] !== undefined) return memo[left];

    let result = Infinity;
    if (n - left <= 1 || isPalindrome(left)) result = 0;
    else
      for (let i = left; i < n; i++)
        if (isPalindrome(left, i + 1))
          result = Math.min(result, 1 + recurse(i + 1));

    memo[left] = result;
    return result;
  }

  return recurse();
};

console.log(minCut("aab"));
