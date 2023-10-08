var SmallestInfiniteSet = function () {
  this.removed = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  for (let i = 1; ; i++)
    if (!this.removed[i]) {
      this.removed[i] = true;
      return i;
    }
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  this.removed[num] = false;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
