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
var increasingBST = function (root) {
  let newTree = new TreeNode();
  let curr = newTree;

  (function recurse(root) {
    if (!root) return;
    recurse(root.left);
    curr.right = new TreeNode(root.val);
    curr = curr.right;
    recurse(root.right);
  })(root);

  return newTree.right;
};
