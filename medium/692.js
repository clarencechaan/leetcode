/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let freqMap = {};
  let unique = [];
  for (const word of words) {
    if (!freqMap[word]) {
      freqMap[word] = 0;
      unique.push(word);
    }
    freqMap[word]++;
  }

  for (let i = 0; i < unique.length - 1; i++)
    if (
      freqMap[unique[i]] < freqMap[unique[i + 1]] ||
      (freqMap[unique[i]] === freqMap[unique[i + 1]] &&
        unique[i] > unique[i + 1])
    ) {
      [unique[i], unique[i + 1]] = [unique[i + 1], unique[i]];
      i -= 2;
    }

  return unique.slice(0, k);
};

console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
