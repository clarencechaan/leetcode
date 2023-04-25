/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let universal = {};
  for (const word of words2) {
    let freqMap = {};
    for (const char of word) freqMap[char] = (freqMap[char] || 0) + 1;
    for (const char in freqMap)
      universal[char] = Math.max(universal[char] || 0, freqMap[char]);
  }

  let result = [];
  loop: for (const word of words1) {
    let freqMap = {};
    for (const char of word) freqMap[char] = (freqMap[char] || 0) + 1;
    for (const char in universal)
      if ((freqMap[char] || 0) < universal[char]) continue loop;
    result.push(word);
  }

  return result;
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])
);
