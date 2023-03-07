var RandomizedSet = function () {
  this.valIdx = {};
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valIdx[val] !== undefined) return false;
  this.valIdx[val] = this.values.length;
  this.values.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.valIdx[val] === undefined) return false;

  const holeIdx = this.valIdx[val];
  delete this.valIdx[val];

  const lastValue = this.values.pop();
  if (holeIdx < this.values.length) {
    this.values[holeIdx] = lastValue;
    this.valIdx[lastValue] = holeIdx;
  }

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.values[Math.floor(Math.random() * this.values.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let randomizedSet = new RandomizedSet();
console.log(randomizedSet.remove(0));
console.log(randomizedSet.remove(0));
console.log(randomizedSet.insert(0));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(0));
console.log(randomizedSet.insert(0));
