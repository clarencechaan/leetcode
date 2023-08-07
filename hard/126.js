/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
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

  function getLength() {
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
    return -1;
  }

  let length = getLength();
  if (length === -1) return [];

  let distance = [];
  function getDistances() {
    let seen = new Set([endIdx]);
    let queue = [[endIdx, 0]];
    for (let i = 0; i < queue.length; i++) {
      if (queue[i][1] >= length - 2) return;
      for (const nextIdx of edgeMap[queue[i][0]] || [])
        if (!seen.has(nextIdx)) {
          seen.add(nextIdx);
          queue.push([nextIdx, 1 + queue[i][1]]);
          if (!distance[queue[i][1]]) distance[queue[i][1]] = [nextIdx];
          else distance[queue[i][1]].push(nextIdx);
        }
    }
  }
  getDistances();

  let result = [[0]];
  function getResult(dist = distance.length - 1) {
    if (dist < 0) return;
    let prev = [...result];
    result = [];
    for (let arr of prev) {
      for (const nextIdx of distance[dist]) {
        if (edgeMap[arr[arr.length - 1]].has(nextIdx))
          result.push([...arr, nextIdx]);
      }
    }
    getResult(dist - 1);
  }

  getResult();
  result = result.map((arr) => arr.map((idx) => wordList[idx]));
  for (const arr of result) arr.push(endWord);

  return result;
};

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
