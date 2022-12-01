/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  function isVowel(char) {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    );
  }

  const vowels = s.split("").filter((char) => isVowel(char));
  let result = s.split("");
  for (let i = 0; i < result.length; i++)
    if (isVowel(result[i])) result[i] = vowels.pop();
  result = result.join("");
  return result;
};

console.log(reverseVowels("leetcode"));
