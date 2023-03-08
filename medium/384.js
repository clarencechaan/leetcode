/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let remaining = [...this.nums];
  let shuffled = [];
  for (let i = 0; i < this.nums.length; i++) {
    const idx = Math.floor(Math.random() * remaining.length);
    shuffled.push(remaining[idx]);
    remaining = [...remaining.slice(0, idx), ...remaining.slice(idx + 1)];
  }
  return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
