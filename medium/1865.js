/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  let freq1 = {};
  for (const num of nums1) freq1[num] = (freq1[num] || 0) + 1;
  this.freq1 = freq1;
  this.nums2 = nums2;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  this.nums2[index] += val;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  return this.nums2.reduce((sum, val) => sum + (this.freq1[tot - val] || 0), 0);
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
