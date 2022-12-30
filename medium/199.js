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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let visible = [];

  function traverse(root, depth = 0) {
    if (!root) return;
    if (visible[depth] === undefined) visible[depth] = root.val;
    traverse(root.right, depth + 1);
    traverse(root.left, depth + 1);
  }

  traverse(root);
  return visible;
};
