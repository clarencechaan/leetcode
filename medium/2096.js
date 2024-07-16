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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  function markDepth(root, depth = 0) {
    if (!root) return;
    root.depth = depth;
    markDepth(root.left, depth + 1);
    markDepth(root.right, depth + 1);
  }

  function markParent(root, parent = null) {
    if (!root) return;
    root.parent = parent;
    markParent(root.left, root);
    markParent(root.right, root);
  }

  function markChild(root) {
    if (!root) return;
    if (root.left) root.left.child = "L";
    if (root.right) root.right.child = "R";
    markChild(root.left);
    markChild(root.right);
  }

  markDepth(root);
  markParent(root);
  markChild(root);

  let start;
  let dest;

  function getEndNodes(root) {
    if (!root) return;
    if (root.val === startValue) start = root;
    if (root.val === destValue) dest = root;
    getEndNodes(root.left);
    getEndNodes(root.right);
  }

  getEndNodes(root);

  let prefix = "";
  let suffix = "";

  while (start.depth > dest.depth) {
    prefix += "U";
    start = start.parent;
  }

  while (dest.depth > start.depth) {
    suffix = dest.child + suffix;
    dest = dest.parent;
  }

  while (start !== dest) {
    prefix += "U";
    suffix = dest.child + suffix;
    start = start.parent;
    dest = dest.parent;
  }

  return prefix + suffix;
};
