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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = [];

  (function traverse(root, arr = [], sum = 0) {
    if (!root) return;
    if (!root.left && !root.right && sum + root.val === targetSum) {
      result.push([...arr, root.val]);
      return;
    }
    traverse(root.left, [...arr, root.val], sum + root.val);
    traverse(root.right, [...arr, root.val], sum + root.val);
  })(root);

  return result;
};
