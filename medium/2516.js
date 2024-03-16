/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  // first thought is this is a dp problem
  // idea:
  // 1. create a helper function minMoves(left, right) that returns the minimum number of minutes needed to take k of each character
  //    after having already taken the characters from 0..left, and right..(n-1), where n === s.length
  // 2. return minMoves(0, n - 1)
  // (too slow)

  // another idea:
  // use sliding window
  // 1. count total number of a, b, and c
  // 2. if total number of a, b, or c is less than k return -1
  // 3. start with sliding window of size 0
  //    => this is the smallest the window can be such that s minus the window can result in the left and right sides of s
  //    containing at least k occurences of a, b, and c
  //    => slide the window from left to right, increasing the size of the window by 1 if the window is valid

  const n = s.length;

  const totals = { a: 0, b: 0, c: 0 };
  for (const char of s) totals[char]++;
  if (totals.a < k || totals.b < k || totals.c < k) return -1;

  let left = 0;
  let right = 0;

  const window = { a: 0, b: 0, c: 0 };
  // window is valid if totals.a - window.a >= k && totals.b - window.b >= k && totals.c - window.c >= k

  for (; right < n; right++) {
    window[s[right]]++;
    if (
      totals.a - window.a < k ||
      totals.b - window.b < k ||
      totals.c - window.c < k
    ) {
      window[s[left]]--;
      left++;
    }
  }

  return n - (right - left);
};

console.log(takeCharacters("aabaaaacaabc", 2));
