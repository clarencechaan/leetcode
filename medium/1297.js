/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let max = 0;
  let seen = new Set();
  for (let i = 0; i + minSize <= s.length; i++) {
    let substr = s.substring(i, i + minSize);
    if (seen.has(substr)) continue;
    else seen.add(substr);
    if (new Set(substr.split("")).size > maxLetters) continue;
    let count = 0;
    loop: for (let j = 0; j + minSize <= s.length; j++) {
      for (let k = 0; k < minSize; k++)
        if (substr[k] !== s[j + k]) continue loop;
      count++;
    }
    max = Math.max(max, count);
  }

  return max;
};

console.log(maxFreq("aababcaab", 2, 3, 4));
