/**
 * @param {number} n
 */
var LUPrefix = function (n) {
  this.arr = [];
  this.max = 0;
};

/**
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
  this.arr[video] = true;
  if (video === this.max + 1) while (this.arr[this.max + 1]) this.max++;
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
  return this.max;
};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
