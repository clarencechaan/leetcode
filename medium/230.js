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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arr = [];

  function traverse(root) {
    if (!root) return;
    arr.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  arr.sort((a, b) => a - b);

  return arr[k - 1];
};
