/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const length = mountainArr.length();

  // binary search for the index of the mountain peak
  function getPeakIndex() {
    let min = 0;
    let max = length - 1;
    let mid = Math.ceil((min + max) / 2);
    while (min < max) {
      const vals = [mountainArr.get(mid - 1), mountainArr.get(mid)];
      if (vals[0] < vals[1]) min = mid;
      else max = mid - 1;
      mid = Math.ceil((min + max) / 2);
    }
    return mid;
  }

  const peakIndex = getPeakIndex();

  // binary search for `target` in the increasing part of `mountainArr`
  function binarySearchLeftPart() {
    let min = 0;
    let max = peakIndex;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      const val = mountainArr.get(mid);
      if (val < target) min = mid + 1;
      else if (val > target) max = mid - 1;
      else break;
      mid = Math.floor((min + max) / 2);
    }
    if (mountainArr.get(mid) === target) return mid;
    return -1;
  }

  // binary search for `target` in the decreasing part of `mountainArr`
  function binarySearchRightPart() {
    let min = peakIndex;
    let max = length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      const val = mountainArr.get(mid);
      if (val > target) min = mid + 1;
      else if (val < target) max = mid - 1;
      else break;
      mid = Math.floor((min + max) / 2);
    }
    if (mountainArr.get(mid) === target) return mid;
    return -1;
  }

  const leftPartIndex = binarySearchLeftPart();
  if (leftPartIndex >= 0) return leftPartIndex;
  const rightPartIndex = binarySearchRightPart();
  if (rightPartIndex >= 0) return rightPartIndex;
  return -1;
};
