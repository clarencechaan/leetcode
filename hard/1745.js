/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function (s) {
  const isPalindrome = Array(s.length)
    .fill()
    .map(() => []);

  // odd length
  for (let i = 0; i < s.length; i++) {
    isPalindrome[i][i + 1] = true;
    let half = 1;
    while (
      i - half >= 0 &&
      i + half < s.length &&
      s[i - half] === s[i + half]
    ) {
      isPalindrome[i - half][i + half + 1] = true;
      half++;
    }
  }

  // even length
  for (let i = 1; i < s.length; i++) {
    let half = 1;
    while (
      i - half >= 0 &&
      i + half - 1 < s.length &&
      s[i - half] === s[i + half - 1]
    ) {
      isPalindrome[i - half][i + half] = true;
      half++;
    }
  }

  for (let i = 1; i < s.length; i++)
    for (let j = i + 1; j < s.length; j++)
      if (isPalindrome[0][i] && isPalindrome[i][j] && isPalindrome[j][s.length])
        return true;

  return false;
};

console.log(checkPartitioning("abcbdd"));
