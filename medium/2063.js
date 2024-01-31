/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  function isVowel(char) {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  }

  let vowelCount = [0];
  for (const char of word)
    vowelCount.push(
      vowelCount[vowelCount.length - 1] + (isVowel(char) ? 1 : 0)
    );

  let sum = vowelCount.reduce((sum, num) => sum + num, 0);
  let result = 0;
  for (let i = 0; i < vowelCount.length - 1; i++) {
    result += sum - vowelCount[i] * (vowelCount.length - 1 - i);
    sum -= vowelCount[i + 1];
  }

  return result;
};

console.log(countVowels("aba"));
