/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  // first thing that comes to mind
  // => count the frequency of each letter

  let freq = {};
  for (const char of word) freq[char] = (freq[char] || 0) + 1;

  // sort our frequency count in descending order
  // => first 8 counts are 1 press, next 8 counts are 2 presses, and so on

  freq = Object.entries(freq).map(([, count]) => count);
  freq.sort((a, b) => (a > b ? -1 : 1));

  let result = 0;
  for (let i = 0; i < freq.length; i++)
    result += freq[i] * (Math.floor(i / 8) + 1);

  return result;
};

console.log(minimumPushes("abcde"));
