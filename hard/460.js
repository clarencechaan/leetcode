/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.filled = 0;
  this.lfuSets = [new Set()];
  this.lfuCounter = Infinity;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  // key exists, return value
  if (this.cache[key]) {
    this.incrementUseCounter(key);
    return this.cache[key].value;
  }

  // key doesn't exist, return -1
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  // key exists, update value
  if (this.cache[key]) {
    this.incrementUseCounter(key);
    this.cache[key].value = value;
    return;
  }

  // key doesn't exist, under capacity, create key-value
  if (this.filled < this.capacity) {
    this.filled++;
    this.cache[key] = { value, useCounter: 0 };
    this.incrementUseCounter(key);
    return;
  }

  // key doesn't exist, at capacity

  // invalidate least frequently used key
  const lfuKey = this.lfuSets[this.lfuCounter].values().next().value;
  this.lfuSets[this.lfuCounter].delete(lfuKey);
  delete this.cache[lfuKey];

  // create key-value
  this.cache[key] = { value, useCounter: 0 };
  this.incrementUseCounter(key);
};

LFUCache.prototype.incrementUseCounter = function (key) {
  const oldUseCounter = this.cache[key].useCounter;
  const newUseCounter = oldUseCounter + 1;
  this.lfuSets[oldUseCounter].delete(key);
  if (!this.lfuSets[newUseCounter]) this.lfuSets[newUseCounter] = new Set();
  this.lfuSets[newUseCounter].add(key);
  if (
    newUseCounter < this.lfuCounter ||
    this.lfuSets[this.lfuCounter].size === 0
  )
    this.lfuCounter = newUseCounter;
  this.cache[key].useCounter = newUseCounter;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
