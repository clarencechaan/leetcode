/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort();

  const trie = { word: "" };

  function addWord(word, idx = 0, node = trie) {
    if (word.length === idx) {
      node.word = word;
      return;
    }

    const char = word[idx];
    if (!node[char]) node[char] = {};
    addWord(word, idx + 1, node[char]);
  }

  words.forEach((word) => addWord(word));

  function getLongestWord(node = trie) {
    if (!node.hasOwnProperty("word")) return "";
    let longest = node.word;
    for (const char in node) {
      if (char === "word") continue;
      const word = getLongestWord(node[char]);
      if (word.length > longest.length) longest = word;
    }
    return longest;
  }

  return getLongestWord();
};

console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
