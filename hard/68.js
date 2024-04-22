/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let result = [];
  let row = [];
  let charCount = 0;
  for (const word of words) {
    if (charCount === 0 || charCount + 1 + word.length <= maxWidth) {
      row.push(word);
      charCount += (charCount === 0 ? 0 : 1) + word.length;
    } else {
      result.push(row);
      row = [word];
      charCount = word.length;
    }
  }

  result.push(row);

  for (let i = 0; i < result.length - 1; i++) {
    const rowCharCount = result[i].reduce((sum, word) => word.length + sum, 0);
    const totalSpaces = maxWidth - rowCharCount;
    const numOfSpaceBlocks = result[i].length - 1;
    const minSpacesPerBlock = Math.floor(totalSpaces / numOfSpaceBlocks);
    const spaceBlocks = Array(numOfSpaceBlocks).fill(minSpacesPerBlock);
    const extraSpaces = totalSpaces - numOfSpaceBlocks * minSpacesPerBlock;
    for (let j = 0; j < extraSpaces; j++) spaceBlocks[j]++;
    let str = result[i][0];
    for (let j = 1; j < result[i].length; j++)
      str += " ".repeat(spaceBlocks[j - 1]) + result[i][j];
    str += " ".repeat(maxWidth - str.length);
    result[i] = str;
  }

  result[result.length - 1] = result[result.length - 1].join(" ");
  result[result.length - 1] += " ".repeat(
    maxWidth - result[result.length - 1].length
  );

  return result;
};

console.log(fullJustify(["a", "b", "c", "d", "e"], 3));
