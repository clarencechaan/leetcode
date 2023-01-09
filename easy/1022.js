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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let sum = 0;

  function traverse(root, str = "") {
    if (!root) return;
    if (!root.left && !root.right) {
      sum += parseInt(str + root.val, 2);
      return;
    }
    traverse(root.left, str + root.val);
    traverse(root.right, str + root.val);
  }

  traverse(root);

  return sum;
};
