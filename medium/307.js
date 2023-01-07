/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;

  let blockSize = Math.ceil(Math.sqrt(nums.length));

  let blocks = [];
  for (let i = 0; i * blockSize + 1 <= nums.length; i++) {
    blocks[i] = [];
    let sum = 0;
    for (let j = i * blockSize; j < (i + 1) * blockSize && j < nums.length; j++)
      sum += nums[j];
    blocks[i] = sum;
  }

  this.blocks = blocks;
  this.blockSize = blockSize;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  let offset = val - this.nums[index];
  this.nums[index] = val;

  let blockNum = Math.floor(index / this.blockSize);
  this.blocks[blockNum] += offset;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let leftBlockNum = Math.floor(left / this.blockSize);
  let rightBlockNum = Math.floor(right / this.blockSize);

  let sum = 0;
  for (let i = leftBlockNum; i <= rightBlockNum; i++) sum += this.blocks[i];

  let leftBlockIdx = leftBlockNum * this.blockSize;
  let rightBlockIdx = (rightBlockNum + 1) * this.blockSize - 1;

  for (let i = leftBlockIdx; i < left; i++) sum -= this.nums[i];
  for (let i = rightBlockIdx; i > right; i--) sum -= this.nums[i] || 0;

  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

let nm = new NumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

console.log(nm.sumRange(0, 14));
nm.update(4, 10);
console.log(nm.sumRange(0, 14));
