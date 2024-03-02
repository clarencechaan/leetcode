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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const depths = [];
  const parents = [];
  function getDepthsAndParents(root, depth = 0, parent = null) {
    if (!root) return;
    depths[root.val] = depth;
    parents[root.val] = parent;
    getDepthsAndParents(root.left, depth + 1, root);
    getDepthsAndParents(root.right, depth + 1, root);
  }

  getDepthsAndParents(root);

  return depths[x] === depths[y] && parents[x] !== parents[y];
};
