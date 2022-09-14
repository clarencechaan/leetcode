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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  function recurse(root, str) {
    if (!root) return [];
    if (!root.left && !root.right) return [str + root.val];
    else {
      return [
        ...recurse(root.left, str + root.val + "->"),
        ...recurse(root.right, str + root.val + "->"),
      ];
    }
  }

  return recurse(root, "");
};
