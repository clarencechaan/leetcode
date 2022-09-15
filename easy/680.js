/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let r = s.split("").reverse().join("");

  if (s === r) return true;
  else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== r[i]) {
        const s1 = s.substring(0, i) + s.substring(i + 1);
        const r1 = r.substring(0, r.length - 1 - i) + r.substring(r.length - i);
        const s2 = s.substring(0, s.length - 1 - i) + s.substring(s.length - i);
        const r2 = r.substring(0, i) + r.substring(i + 1);
        return s1 === r1 || s2 === r2;
      }
    }
  }
};

console.log(validPalindrome("abc"));
