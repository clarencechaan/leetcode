/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  wordList.unshift(beginWord);

  function edgeExists(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) if (word1[i] !== word2[i]) diff++;
    return diff === 1;
  }

  let edgeMap = [];
  for (let i = 0; i < wordList.length; i++)
    for (let j = i + 1; j < wordList.length; j++)
      if (edgeExists(wordList[i], wordList[j])) {
        if (!edgeMap[i]) edgeMap[i] = new Set([j]);
        else edgeMap[i].add(j);
        if (!edgeMap[j]) edgeMap[j] = new Set([i]);
        else edgeMap[j].add(i);
      }

  let endIdx = wordList.indexOf(endWord);

  let seen = new Set([0]);
  let queue = [[0, 0]];
  for (let i = 0; i < queue.length; i++) {
    if (queue[i][0] === endIdx) return 1 + queue[i][1];
    for (const nextIdx of edgeMap[queue[i][0]] || [])
      if (!seen.has(nextIdx)) {
        seen.add(nextIdx);
        queue.push([nextIdx, 1 + queue[i][1]]);
      }
  }

  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
