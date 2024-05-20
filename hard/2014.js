/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function (s, k) {
  const freq = {};
  for (const char of s) freq[char] = (freq[char] || 0) + 1;
  for (const char in freq) if (freq[char] < k) delete freq[char];

  const maxLength = Math.floor(s.length / k);

  function getWords(freq, word = "", words = new Set()) {
    if (word.length > maxLength) return;
    if (words.has(word)) return;
    words.add(word);

    for (const char in freq) {
      if (freq[char] < k) continue;
      freq[char] -= k;
      getWords(freq, word + char, words);
      freq[char] += k;
    }

    return words;
  }

  function wordExists(word, i = 0, j = 0) {
    if (j >= word.length) return true;
    if (i >= s.length) return false;
    if (word[j] === s[i]) return wordExists(word, i + 1, j + 1);
    return wordExists(word, i + 1, j);
  }

  const words = [...getWords(freq)].sort((a, b) =>
    a.length > b.length || (a.length === b.length && a > b) ? -1 : 1
  );

  for (const word of words) if (wordExists(word.repeat(k))) return word;

  return "";
};

console.log(longestSubsequenceRepeatedK("letsleetcode", 2));
