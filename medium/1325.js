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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  function isValid(root) {
    if (!root) return false;
    let leftIsValid = isValid(root.left);
    let rightIsValid = isValid(root.right);
    if (!leftIsValid) root.left = null;
    if (!rightIsValid) root.right = null;
    return root.val !== target || leftIsValid || rightIsValid;
  }

  isValid(root);

  if (root.val === target && !root.left && !root.right) return null;
  return root;
};
