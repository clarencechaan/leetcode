/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.stream = 0;
  this.value = value;
  this.k = k;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  if (num !== this.value) {
    this.stream = 0;
    return false;
  }
  this.stream++;
  return this.stream >= this.k;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
