/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pAncestors = [];
  let qAncestors = [];

  function traverse(root, arr = []) {
    if (!root) return;
    if (root === p) pAncestors = [...arr, root];
    else if (root === q) qAncestors = [...arr, root];
    traverse(root.left, [...arr, root]);
    traverse(root.right, [...arr, root]);
  }

  traverse(root);

  pAncestors.reverse();
  qAncestors.reverse();

  return pAncestors[pAncestors.findIndex((node) => qAncestors.includes(node))];
};
