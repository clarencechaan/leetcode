/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  // 1. create a recursive helper function recursiveMaxPalindromes(idx) that retunrs the
  //    maximum number of valid palindromic substrings starting from index `idx`

  // need to find a way to quickly check if a substring of `s` is a palindrome
  // create an array isPalindrome where isPalindrom[left][right] returns true if the substring in `s` from index `left` to index `right`
  //    is a palindrome
  const isPalindrome = Array(s.length)
    .fill()
    .map(() => []);
  for (let mid = 0; mid < s.length; mid++) {
    for (
      let j = 0;
      mid - j >= 0 && mid + j < s.length && s[mid - j] === s[mid + j];
      j++
    )
      isPalindrome[mid - j][mid + j + 1] = true;
    for (
      let j = 0;
      mid - j - 1 >= 0 && mid + j < s.length && s[mid - j - 1] === s[mid + j];
      j++
    )
      isPalindrome[mid - j - 1][mid + j + 1] = true;
  }

  function recursiveMaxPalindromes(idx = 0, dp = Array(s.length).fill(-1)) {
    if (idx >= s.length) return 0;
    if (dp[idx] >= 0) return dp[idx];
    let result = recursiveMaxPalindromes(idx + 1, dp);
    for (let i = idx + k; i <= s.length; i++)
      if (isPalindrome[idx][i])
        result = Math.max(result, 1 + recursiveMaxPalindromes(i, dp));
    dp[idx] = result;
    return result;
  }

  return recursiveMaxPalindromes();
};

console.log(maxPalindromes("abaccdbbd", 3));
