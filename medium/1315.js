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
var sumEvenGrandparent = function (root) {
  let result = 0;

  function traverse(root) {
    if (!root) return;
    if (root.val % 2 === 0) {
      result +=
        (root.left?.left?.val || 0) +
        (root.left?.right?.val || 0) +
        (root.right?.left?.val || 0) +
        (root.right?.right?.val || 0);
    }
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);

  return result;
};
