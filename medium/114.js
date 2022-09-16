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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null;

  let node = root;
  node.right = append(flatten(root.left), flatten(root.right));
  node.left = null;

  return node;
};

function append(root1, root2) {
  if (!root1) return root2;

  let node = root1;
  node.right = append(root1.right, root2);
  return node;
}
