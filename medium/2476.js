/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  let nums = new Set();
  (function getNums(root) {
    if (!root) return;
    nums.add(root.val);
    getNums(root.left);
    getNums(root.right);
  })(root);

  nums = [...nums].sort((a, b) => (a > b ? 1 : -1));

  function getMin(ceiling) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.ceil((left + right) / 2);
    while (left < right) {
      if (nums[mid] <= ceiling) left = mid;
      else right = mid - 1;
      mid = Math.ceil((left + right) / 2);
    }
    return nums[mid] <= ceiling ? nums[mid] : -1;
  }

  function getMax(floor) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < right) {
      if (nums[mid] >= floor) right = mid;
      else left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    return nums[mid] >= floor ? nums[mid] : -1;
  }

  const result = queries.map((num) => [getMin(num), getMax(num)]);
  return result;
};
