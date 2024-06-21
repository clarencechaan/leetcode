/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const wordScore = [];
  for (const word of words) {
    wordScore.push(
      word
        .split("")
        .map((letter) => score[letter.charCodeAt() - 97])
        .reduce((sum, val) => sum + val, 0)
    );
  }

  words = words.map((word) => {
    const wFreq = {};
    for (const char of word) wFreq[char] = (wFreq[char] || 0) + 1;
    return wFreq;
  });

  const freq = {};
  for (const letter of letters) freq[letter] = (freq[letter] || 0) + 1;

  function canTake(wFreq, freq) {
    for (const char in wFreq) if (wFreq[char] > (freq[char] || 0)) return false;
    return true;
  }

  function recursion(wordIdx = 0) {
    if (wordIdx >= words.length) return 0;
    const wFreq = words[wordIdx];
    let take = 0;

    if (canTake(wFreq, freq)) {
      for (const char in wFreq) freq[char] -= wFreq[char];
      take = wordScore[wordIdx] + recursion(wordIdx + 1);
      for (const char in wFreq) freq[char] += wFreq[char];
    }

    const skip = recursion(wordIdx + 1);
    return Math.max(take, skip);
  }

  return recursion();
};

console.log(
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
