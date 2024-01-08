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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  let sums = [];

  function getSums(root, depth = 0) {
    if (!root) return;
    sums[depth] = (sums[depth] || 0) + root.val;
    getSums(root.left, depth + 1);
    getSums(root.right, depth + 1);
  }

  getSums(root);

  function replaceValues(node = root, depth = 0) {
    if (!node) return;
    let childVal =
      sums[depth + 1] - (node.left?.val || 0) - (node.right?.val || 0);
    if (node.left) node.left.val = childVal;
    if (node.right) node.right.val = childVal;
    replaceValues(node.left, depth + 1);
    replaceValues(node.right, depth + 1);
  }

  root.val = 0;
  replaceValues();

  return root;
};
