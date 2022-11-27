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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function mirror(root) {
    if (!root) return root;
    const newNode = new TreeNode(root.val);
    newNode.left = mirror(root.right);
    newNode.right = mirror(root.left);
    return newNode;
  }

  function isEqual(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return (
      p.val === q.val && isEqual(p.left, q.left) && isEqual(p.right, q.right)
    );
  }

  return isEqual(root.left, mirror(root.right));
};
