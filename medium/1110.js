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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let to_delete_set = new Set(to_delete);
  let result = [];

  function traverse(root, added = false) {
    if (!root) return;
    if (!to_delete_set.has(root.val)) {
      if (!added) result.push(root);
      traverse(root.left, true);
      traverse(root.right, true);
    } else {
      traverse(root.left, false);
      traverse(root.right, false);
    }

    if (to_delete_set.has(root?.left?.val)) root.left = null;
    if (to_delete_set.has(root?.right?.val)) root.right = null;
  }

  traverse(root);

  return result;
};
