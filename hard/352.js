var SummaryRanges = function () {
  this.arr = [];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
  this.arr[value] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  const result = [];
  let left = Infinity;

  for (let right = 0; right <= this.arr.length; right++)
    if (this.arr[right] && !this.arr[right - 1]) left = right;
    else if (!this.arr[right] && left <= right) {
      result.push([left, right - 1]);
      left = Infinity;
    }

  return result;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
