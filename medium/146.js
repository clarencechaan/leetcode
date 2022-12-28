/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.keys = new Set();
  this.dict = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.keys.has(key)) {
    this.keys.delete(key);
    this.keys.add(key);
    return this.dict[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.keys.delete(key);
  this.keys.add(key);
  this.dict[key] = value;
  if (this.keys.size > this.capacity) {
    const LRUkey = this.keys.values().next().value;
    this.keys.delete(LRUkey);
    delete this.dict[LRUkey];
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
