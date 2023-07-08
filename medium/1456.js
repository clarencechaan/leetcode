/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  function isVowel(char) {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  }

  let count = 0;
  for (let i = 0; i < k; i++) if (isVowel(s[i])) count++;

  let max = count;
  for (let i = 0; i + k < s.length; i++) {
    if (isVowel(s[i])) count--;
    if (isVowel(s[i + k])) count++;
    max = Math.max(count, max);
  }

  return max;
};

console.log(maxVowels("abciiidef", 3));
