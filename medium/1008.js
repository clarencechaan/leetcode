/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  function recurse(preorder) {
    if (!preorder.length) return null;
    let idx = preorder.findIndex((val) => val > preorder[0]);
    if (idx === -1) idx = preorder.length;
    let root = new TreeNode(preorder[0]);
    let left = recurse(preorder.slice(1, idx));
    let right = recurse(preorder.slice(idx));
    root.left = left;
    root.right = right;
    return root;
  }

  return recurse(preorder);
};
