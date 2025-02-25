/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (s[left] === s[right] && left < right) {
    const char = s[left];
    while (s[left] === char) left++;
    while (s[right] === char) right--;
  }

  return Math.max(right - left + 1, 0);
};
