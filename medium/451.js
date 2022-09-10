/**
 * @param {string} s
 * @return {string}
 */
// 1) count the number of occurences of each character
// 2) recreate the string starting from the character with the highest count
var frequencySort = function (s) {
  let counts = {};
  for (const char of s) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }

  let countsArr = [];
  for (const char in counts) {
    countsArr.push({ char, count: counts[char] });
  }
  countsArr = countsArr.sort((a, b) => (a.count > b.count ? -1 : 1));

  let sortedString = "";
  for (const charCount of countsArr) {
    sortedString += charCount.char.repeat(charCount.count);
  }

  return sortedString;
};

console.log(frequencySort("tree"));
