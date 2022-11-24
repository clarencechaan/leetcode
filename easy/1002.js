/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const firstWord = words[0];
  let result = [];
  for (const char of firstWord)
    if (words.every((word) => word.includes(char))) {
      result.push(char);
      for (let i = 1; i < words.length; i++) {
        const idx = words[i].indexOf(char);
        words[i] = words[i].slice(0, idx) + words[i].slice(idx + 1);
      }
    }
  return result;
};

console.log(commonChars(["cool", "lock", "cook"]));
