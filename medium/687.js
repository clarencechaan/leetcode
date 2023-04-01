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
var longestUnivaluePath = function (root) {
  function longestPathPassingRoot(root, val, length = 0) {
    if (!root || root.val !== val) return length - 1;
    if (length === 0)
      return (
        longestPathPassingRoot(root.left, val, length + 1) +
        longestPathPassingRoot(root.right, val, length + 1)
      );
    return Math.max(
      longestPathPassingRoot(root.left, val, length + 1),
      longestPathPassingRoot(root.right, val, length + 1)
    );
  }

  let max = 0;
  function recurse(root) {
    if (!root) return;
    max = Math.max(longestPathPassingRoot(root, root.val), max);
    recurse(root.left);
    recurse(root.right);
  }

  recurse(root);
  return max;
};
