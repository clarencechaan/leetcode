/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  let count1 = [];
  for (let i = text.length; i >= 0; i--)
    count1[i] = (count1[i + 1] || 0) + (text[i] === pattern[1] ? 1 : 0);

  let front = count1[0];
  for (let i = 0; i < text.length; i++)
    if (text[i] === pattern[0]) front += count1[i + 1];

  let back = 0;
  for (let i = 0; i < text.length; i++)
    if (text[i] === pattern[0]) back += count1[i + 1] + 1;

  return Math.max(front, back);
};

console.log(maximumSubsequenceCount("abdcdbc", "ac"));
