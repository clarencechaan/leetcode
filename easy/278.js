/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let min = 1;
    let max = n;
    let mid = Math.floor((min + max) / 2);

    while (max !== min) {
      if (isBadVersion(mid)) max = Math.max(mid, min);
      else min = Math.min(mid + 1, max);
      mid = Math.floor((min + max) / 2);
    }

    return mid;
  };
};

console.log(
  solution((n) => {
    return n >= 28;
  })(50)
);
