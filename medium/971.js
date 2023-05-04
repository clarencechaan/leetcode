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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  let result = [];

  function traverse(root) {
    if (!root) return true;
    if (root.val !== voyage.shift()) return false;
    if (root.left && voyage[0] !== root.left?.val) {
      result.push(root.val);
      return traverse(root.right) && traverse(root.left);
    }
    return traverse(root.left) && traverse(root.right);
  }

  if (traverse(root)) return result;
  return [-1];
};
