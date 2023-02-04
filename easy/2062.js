/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let result = 0;

  for (let i = 0; i + 4 < word.length; i++) {
    let subArr = word.substring(i, i + 5).split("");
    if (subArr.some((char) => !vowels.has(char))) continue;
    let seenVowels = new Set(subArr);

    for (let j = i + 4; j < word.length; j++) {
      if (!vowels.has(word[j])) break;
      seenVowels.add(word[j]);
      if (seenVowels.size === 5) result++;
    }
  }

  return result;
};

console.log(countVowelSubstrings("aaaeeeiiioxoouuuu"));
