var AllOne = function () {
  this.map = new Map();
  this.min = Infinity;
  this.max = -Infinity;
  this.mins = new Set();
  this.maxes = new Set();
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  const count = (this.map.get(key) || 0) + 1;
  this.map.set(key, count);

  this.updateMinMax(key, count);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  const count = this.map.get(key) - 1;
  if (!count) this.map.delete(key);
  else this.map.set(key, count);

  this.updateMinMax(key, count);
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  return this.maxes.values().next().value || "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  return this.mins.values().next().value || "";
};

AllOne.prototype.findMins = function () {
  let min = Infinity;
  for (const [, count] of this.map) if (count < min) min = count;

  const mins = new Set();
  for (const [word, count] of this.map) if (count === min) mins.add(word);

  this.mins = mins;
  this.min = min;
};

AllOne.prototype.findMaxes = function () {
  let max = -Infinity;
  for (const [, count] of this.map) if (count > max) max = count;

  const maxes = new Set();
  for (const [word, count] of this.map) if (count === max) maxes.add(word);

  this.maxes = maxes;
  this.max = max;
};

AllOne.prototype.updateMinMax = function (key, count) {
  if (count < this.min && count > 0) {
    this.min = count;
    this.mins = new Set([key]);
  } else if (count === this.min) {
    this.mins.add(key);
  } else if (count !== this.min) {
    this.mins.delete(key);
    if (!this.mins.size) this.findMins();
  }

  if (count > this.max) {
    this.max = count;
    this.maxes = new Set([key]);
  } else if (count === this.max) {
    this.maxes.add(key);
  } else if (count !== this.max) {
    this.maxes.delete(key);
    if (!this.maxes.size) this.findMaxes();
  }
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
