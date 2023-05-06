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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let strs = new Set();

  function recurse(root, str = "") {
    if (!root) return;
    if (!root.left && !root.right) {
      strs.add(String.fromCharCode(root.val + 97) + str);
      return;
    }
    recurse(root.left, String.fromCharCode(root.val + 97) + str);
    recurse(root.right, String.fromCharCode(root.val + 97) + str);
  }

  recurse(root);

  let result;
  for (const str of strs) if (!result || str < result) result = str;
  return result;
};
