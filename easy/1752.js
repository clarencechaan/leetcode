/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const minIndices = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.every((num) => nums[i] <= num)) minIndices.push(i);
  }

  for (const idx of minIndices) {
    let result = true;
    const orig = [...nums.slice(idx), ...nums.slice(0, idx)];
    for (let i = 0; i < orig.length - 1; i++) {
      if (orig[i] > orig[i + 1]) result = false;
    }
    if (result) return true;
  }
  return false;
};

console.log(check([10, 6, 10]));
