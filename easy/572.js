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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  function isEqual(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (
      a.val === b.val && isEqual(a.left, b.left) && isEqual(a.right, b.right)
    );
  }

  if (!root) return false;
  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
