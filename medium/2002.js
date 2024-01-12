/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
  let subsequences = [];
  (function getSubsequences(idx = 0, sub = []) {
    if (idx >= s.length) return;
    getSubsequences(idx + 1, sub);
    sub.push(idx);
    subsequences.push([...sub]);
    getSubsequences(idx + 1, sub);
    sub.pop();
  })();

  function isPalindrome(sub) {
    for (let i = 0; i < sub.length / 2; i++)
      if (s[sub[i]] !== s[sub[sub.length - 1 - i]]) return false;
    return true;
  }

  subsequences = subsequences.filter(isPalindrome);
  subsequences.sort((a, b) => (a.length > b.length ? -1 : 1));

  function isDisjoint(sub1, sub2) {
    return new Set([...sub1, ...sub2]).size === sub1.length + sub2.length;
  }

  let max = 0;
  for (let i = 0; i < subsequences.length; i++)
    for (let j = i + 1; j < subsequences.length; j++)
      if (subsequences[i].length * subsequences[j].length <= max) break;
      else if (isDisjoint(subsequences[i], subsequences[j]))
        max = subsequences[i].length * subsequences[j].length;
  return max;
};

console.log(maxProduct("leetcodecom"));
