/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function (keys, values, dictionary) {
  const keyToVal = {};
  for (let i = 0; i < keys.length; i++) keyToVal[keys[i]] = values[i];
  this.keyToVal = keyToVal;

  const wordCount = {};
  for (const word of dictionary) {
    const encrypted = this.encrypt(word);
    wordCount[encrypted] = (wordCount[encrypted] || 0) + 1;
  }

  this.wordCount = wordCount;
};

/**
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function (word1) {
  const keyToVal = this.keyToVal;

  let result = "";
  for (const c of word1) {
    const val = keyToVal[c];
    if (!val) return "";
    result += val;
  }

  return result;
};

/**
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function (word2) {
  return this.wordCount[word2] || 0;
};

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
