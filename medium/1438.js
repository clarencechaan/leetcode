/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // make a tree to quickly find the min and max value for each range
  function getMinMaxTree(start = 0, end = nums.length) {
    if (end - start === 1)
      return { min: nums[start], max: nums[start], range: [start, end] };
    if (start === end) return null;
    const leftSubtree = getMinMaxTree(start, Math.floor((start + end) / 2));
    const rightSubtree = getMinMaxTree(Math.floor((start + end) / 2), end);
    const tree = {
      min: Math.min(leftSubtree.min || Infinity, rightSubtree.min || Infinity),
      max: Math.max(
        leftSubtree.max || -Infinity,
        rightSubtree.max || -Infinity
      ),
      range: [start, end],
      left: leftSubtree,
      right: rightSubtree,
    };

    return tree;
  }

  const minMaxTree = getMinMaxTree();

  function getMax(start, end, tree = minMaxTree) {
    if (tree.range[1] <= start || end <= tree.range[0]) return -Infinity;
    if (start <= tree.range[0] && tree.range[1] <= end) return tree.max;
    return Math.max(
      getMax(start, end, tree.left),
      getMax(start, end, tree.right)
    );
  }

  function getMin(start, end, tree = minMaxTree) {
    if (tree.range[1] <= start || end <= tree.range[0]) return Infinity;
    if (start <= tree.range[0] && tree.range[1] <= end) return tree.min;
    return Math.min(
      getMin(start, end, tree.left),
      getMin(start, end, tree.right)
    );
  }

  let left = 0;
  let right = 1;
  for (; right <= nums.length; right++)
    if (getMax(left, right) - getMin(left, right) > limit) left++;

  return right - left - 1;
};

console.log(longestSubarray([8, 2, 4, 7], 4));
