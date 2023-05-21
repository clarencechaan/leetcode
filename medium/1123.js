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
var lcaDeepestLeaves = function (root) {
  let deepest = new Set();
  let maxDepth = 0;

  function getDeepest(root, depth = 0) {
    if (!root) return;
    if (root.left) root.left.parent = root;
    if (root.right) root.right.parent = root;
    if (depth > maxDepth) {
      maxDepth = depth;
      deepest = new Set();
    }
    if (depth === maxDepth) deepest.add(root);
    getDeepest(root.left, depth + 1);
    getDeepest(root.right, depth + 1);
  }

  getDeepest(root);

  let ancestors = new Set(deepest);
  while (ancestors.size > 1) {
    let prev = new Set(ancestors);
    ancestors = new Set();
    for (const ancestor of prev) ancestors.add(ancestor.parent);
  }

  let ancestor = ancestors.values().next().value;

  delete ancestor.parent;
  return ancestor;
};
