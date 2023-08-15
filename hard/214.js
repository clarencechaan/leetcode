/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const n = s.length;

  function frontPalindromeLength() {
    for (let length = Math.floor(n / 2); length >= 1; length--) {
      let i;
      if (s[2 * length])
        for (i = 0; i < length; i++) if (s[i] !== s[2 * length - i]) break;
      if (i === length) return 2 * length + 1;
      for (i = 0; i < length; i++) if (s[i] !== s[2 * length - 1 - i]) break;
      if (i === length) return 2 * length;
    }
    return 1;
  }

  let length = frontPalindromeLength();
  return s.slice(length).split("").reverse().join("") + s;
};

console.log(shortestPalindrome("aacecaaa"));
