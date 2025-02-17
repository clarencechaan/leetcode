/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const left = [];
  const middle = [];
  const right = [];

  for (const num of nums)
    if (num < pivot) left.push(num);
    else if (num === pivot) middle.push(num);
    else if (num > pivot) right.push(num);

  return [...left, ...middle, ...right];
};
