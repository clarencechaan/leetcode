var WordDictionary = function () {
  this.dictionary = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.dictionary.includes(word)) this.dictionary.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dictionary.some((dictWord) => {
    if (dictWord === word) return true;
    if (dictWord.length !== word.length) return false;
    for (let i = 0; i < word.length; i++)
      if (dictWord[i] !== word[i] && word[i] !== ".") return false;
    return true;
  });
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
