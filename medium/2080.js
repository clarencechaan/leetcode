/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  let idxMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (!idxMap[arr[i]]) idxMap[arr[i]] = [i];
    else idxMap[arr[i]].push(i);
  }

  this.idxMap = idxMap;
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  let idxMap = this.idxMap;
  if (!idxMap[value]) return 0;

  // find first idx that is equal to or greater than left
  function findStartIdx() {
    let min = 0;
    let max = idxMap[value].length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (idxMap[value][mid] < left) min = mid + 1;
      else if (idxMap[value][mid] > left) max = mid;
      else break;
      mid = Math.floor((min + max) / 2);
    }

    return idxMap[value][mid] >= left ? mid : -1;
  }

  // find last idx that is equal to or less than right
  function findEndIdx() {
    let min = 0;
    let max = idxMap[value].length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      if (idxMap[value][mid] < right) min = mid;
      else if (idxMap[value][mid] > right) max = mid - 1;
      else break;
      mid = Math.ceil((min + max) / 2);
    }
    return idxMap[value][mid] <= right ? mid : -1;
  }

  let startIdx = findStartIdx();
  let endIdx = findEndIdx();

  if (startIdx === -1 || endIdx === -1) return 0;
  return endIdx - startIdx + 1;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
