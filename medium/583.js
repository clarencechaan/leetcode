/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = [];
  for (let i = 0; i < word1.length + 1; i++) dp.push(Array(word2.length + 1));

  function commonLetters(idx1 = 0, idx2 = 0) {
    if (dp[idx1][idx2] !== undefined) return dp[idx1][idx2];

    let answer;
    if (idx1 === word1.length) answer = 0;
    else if (idx2 === word2.length) answer = 0;
    else if (word1[idx1] === word2[idx2])
      answer = 1 + commonLetters(idx1 + 1, idx2 + 1);
    else
      answer = Math.max(
        commonLetters(idx1 + 1, idx2),
        commonLetters(idx1, idx2 + 1)
      );
    dp[idx1][idx2] = answer;
    return answer;
  }

  let numOfCommonLetters = commonLetters();
  return word1.length + word2.length - numOfCommonLetters * 2;
};

console.log(minDistance("dinitrophenylhydrazine", "dimethylhydrazine"));
