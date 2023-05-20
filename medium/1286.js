/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;
  let arr = [];
  for (let i = 0; i < combinationLength; i++) arr.push(i);
  arr[arr.length - 1] = this.combinationLength - 2;
  this.arr = arr;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  if (this.arr[this.arr.length - 1] + 1 < this.characters.length)
    this.arr[this.arr.length - 1]++;
  else {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.arr[i] < this.characters.length - (this.arr.length - i)) {
        this.arr[i]++;
        for (let j = i + 1; j < this.arr.length; j++)
          this.arr[j] = this.arr[j - 1] + 1;
        break;
      }
    }
  }
  return this.arr.map((idx) => this.characters[idx]).join("");
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  for (let i = 0; i < this.arr.length; i++)
    if (this.arr[i] < this.characters.length - (this.arr.length - i))
      return true;
  return false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
