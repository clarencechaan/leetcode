/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
  const trie = {};
  for (const word of words) {
    let curr = trie;
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      if (!curr[char]) curr[char] = {};
      curr = curr[char];
    }
    curr.word = true;
  }

  this.trie = trie;
  this.stream = [];
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.stream.push(letter);

  return this.streamHasSuffix();
};

StreamChecker.prototype.streamHasSuffix = function () {
  let curr = this.trie;

  for (let i = this.stream.length - 1; i >= 0 && curr; i--) {
    const char = this.stream[i];
    curr = curr[char];
    if (curr?.word) return true;
  }

  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
