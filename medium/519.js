/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
  this.m = m;
  this.n = n;
  this.free = m * n;
  this.flipped = new Set();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  let rand = Math.floor(Math.random() * this.free);
  while (this.flipped.has(rand)) rand = Math.floor(Math.random() * this.free);
  this.flipped.add(rand);
  return [rand % this.m, Math.floor(rand / this.m)];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.free = this.m * this.n;
  this.flipped = new Set();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
