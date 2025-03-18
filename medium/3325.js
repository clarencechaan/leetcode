/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function (s, k) {
  const freq = {};
  const runningFreq = [{}];
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
    runningFreq.push({ ...freq });
  }

  function isValidSubstring(left, right) {
    for (const char in runningFreq[right]) {
      const diff = runningFreq[right][char] - (runningFreq[left][char] || 0);
      if (diff >= k) return true;
    }
    return false;
  }

  function binarySearch(left) {
    let min = left + k;
    let max = s.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (isValidSubstring(left, mid)) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    if (isValidSubstring(left, mid)) return mid;
    return -1;
  }

  let result = 0;
  for (let left = 0; left + k <= s.length; left++) {
    const right = binarySearch(left);
    if (right === -1) continue;
    result += 1 + s.length - right;
  }
  return result;
};
