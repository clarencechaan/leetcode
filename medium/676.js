var MagicDictionary = function () {};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.dictionary = [...dictionary];
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  let possible = this.dictionary.filter(
    (word) => word.length === searchWord.length && word !== searchWord
  );

  for (const word of possible) {
    let differ = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== searchWord[i]) differ++;
      if (differ > 1) break;
    }
    if (differ === 1) return true;
  }

  return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
