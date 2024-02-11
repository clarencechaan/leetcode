var TimeLimitedCache = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const now = Date.now();
  let result = false;
  if (this.map[key]?.[1] > now) result = true;
  const expiry = now + duration;
  if (!this.map[key] || result) this.map[key] = [value, expiry];
  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const now = Date.now();
  if (this.map[key]?.[1] > now) return this.map[key][0];
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let result = 0;
  for (const key in this.map) if (this.map[key][1] > now) result++;
  return result;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
