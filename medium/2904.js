/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  function isBeautiful(left, right) {
    let count = 0;
    for (let i = left; i < right; i++) if (s[i] === "1") count++;
    return count === k;
  }

  if (s.replaceAll("0", "").length < k) return "";

  for (let length = k; length <= s.length; length++) {
    let result = "";
    for (let left = 0; left + length <= s.length; left++) {
      const right = left + length;
      if (isBeautiful(left, right)) {
        const substr = s.slice(left, right);
        if (!result || substr < result) result = substr;
      }
    }
    if (result) return result;
  }
};
