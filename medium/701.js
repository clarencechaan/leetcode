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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  function insert(root) {
    if (!root) return;
    if (val > root.val) {
      if (root.right) insert(root.right);
      else root.right = new TreeNode(val);
    } else if (val < root.val) {
      if (root.left) insert(root.left);
      else root.left = new TreeNode(val);
    }
  }

  insert(root);
  return root;
};
