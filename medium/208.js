var Trie = function () {};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let next = this;
  for (const char of word) {
    if (!next[char]) next[char] = new Trie();
    next = next[char];
  }
  next.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let next = this;
  for (const char of word) {
    if (!next[char]) return false;
    next = next[char];
  }
  return !!next.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let next = this;
  for (const char of prefix) {
    next = next[char];
    if (!next) return false;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
