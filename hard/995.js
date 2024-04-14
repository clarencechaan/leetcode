/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  // maybe work maybe not: iterate through nums from left to right
  // => for each `nums[i]`:
  //    if `nums[i]` is 0, flip starting from index `i`

  // idea seems like it works, just need to make it faster
  // => instead of flipping k bits every time that we have to,
  //    maybe we can somehow quickly keep track of how many times a certain bit has been flipped
  //    keep track of flip ranges? --nope

  // optimized:
  // => create a `flipped` array which is just `nums` with each bit flipped
  // => iterate through `nums` and `flipped`, switching back and forth depending on whether we need
  //    to flip the current bit or not, or if we've reached an index where we must switch arrays

  const flipped = nums.map((bit) => (bit + 1) % 2);
  const arrs = [nums, flipped];

  let curr = 0;
  let result = 0;
  const switchIndices = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (switchIndices.has(i)) curr = (curr + 1) % 2;
    if (arrs[curr][i] === 0) {
      if (i > nums.length - k) return -1;
      result++;
      switchIndices.add(i + k);
      curr = (curr + 1) % 2;
    }
  }

  return result;
};

console.log(minKBitFlips([0, 1, 0], 1));
