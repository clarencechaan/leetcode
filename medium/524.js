/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) =>
    a.length > b.length ? -1 : a.length === b.length ? (a > b ? 1 : -1) : 1
  );

  function isValid(word) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < word.length) {
      if (s[i] === word[j]) j++;
      i++;
    }
    return j === word.length;
  }

  for (const word of dictionary) if (isValid(word)) return word;
  return "";
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
