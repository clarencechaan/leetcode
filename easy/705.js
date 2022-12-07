var MyHashSet = function () {
  this.hs = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const idx = this.hs.indexOf(key);
  if (idx === -1) this.hs.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const idx = this.hs.indexOf(key);
  if (idx >= 0) this.hs = [...this.hs.slice(0, idx), ...this.hs.slice(idx + 1)];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hs.indexOf(key) >= 0;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
