/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let result = text.split(" ");
  result[0] = result[0].toLowerCase();
  result = result.map((word, idx) => ({ word, idx }));
  result.sort((a, b) =>
    a.word.length > b.word.length ||
    (a.word.length === b.word.length && a.idx > b.idx)
      ? 1
      : -1
  );
  result = result.map(({ word }) => word);
  result[0] = result[0][0].toUpperCase() + result[0].substring(1);
  result = result.join(" ");
  return result;
};

console.log(arrangeWords("Leetcode is cool"));
