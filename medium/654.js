/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  function buildTree(left = 0, right = nums.length) {
    if (right - left < 1) return null;
    let idx = -1;
    for (let i = left; i < right; i++)
      if (idx === -1 || nums[i] > nums[idx]) idx = i;
    return new TreeNode(
      nums[idx],
      buildTree(left, idx),
      buildTree(idx + 1, right)
    );
  }

  return buildTree();
};
