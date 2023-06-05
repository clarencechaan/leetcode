/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  let result = nums.map((num, idx) => ({
    num: parseInt(
      num
        .toString()
        .split("")
        .map((digit) => mapping[digit])
        .join("")
    ),
    idx,
  }));
  result.sort((a, b) =>
    a.num > b.num || (a.num === b.num && a.idx > b.idx) ? 1 : -1
  );
  result = result.map(({ idx }) => nums[idx]);
  return result;
};

console.log(
  sortJumbled(
    (mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    (nums = [789, 456, 123])
  )
);
