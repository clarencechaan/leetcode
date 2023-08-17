var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  function findInsertIndex(arr, num) {
    let min = 0;
    let max = arr.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (num < arr[mid]) max = mid;
      else if (num > arr[mid]) min = mid + 1;
      else break;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  let idx = findInsertIndex(this.nums, num);
  this.nums.splice(idx, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.nums.length % 2 === 1)
    return this.nums[Math.floor(this.nums.length / 2)];
  else
    return (
      (this.nums[this.nums.length / 2] + this.nums[this.nums.length / 2 - 1]) /
      2
    );
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
