/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  let result = 0;
  let freq = {};
  let vowels = 0;
  for (let i = 0, streak = 0; i < word.length; i++)
    if (word[i] < word[i - 1]) {
      streak = 1;
      vowels = 1;
      freq = { [word[i]]: 1 };
    } else {
      streak++;
      freq[word[i]] = (freq[word[i]] || 0) + 1;
      if (freq[word[i]] === 1) vowels++;
      if (vowels >= 5) result = Math.max(result, streak);
    }
  return result;
};

console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
