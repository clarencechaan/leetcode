/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  let targetIndices = [];
  for (let i = 0; i < words.length; i++)
    if (words[i] === target) targetIndices.push(i);
  if (targetIndices.length === 0) return -1;

  let result = Infinity;
  for (const targetIndex of targetIndices) {
    let min = Math.min(targetIndex, startIndex);
    let max = Math.max(targetIndex, startIndex);
    result = Math.min(max - min, min + words.length - max, result);
  }
  return result;
};

console.log(
  closetTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1)
);

// 0 1 2 3 4
// 1 -> 0
// 1 -> 4

// 3 -> 0 => max(3-0, (0+5)-3)
// 0 -> 3 => max(0-3, (0+5)-3)
