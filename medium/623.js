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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root);

  let parents = [];

  function findParents(root, currDepth = 1) {
    if (!root) return;
    if (currDepth === depth - 1) {
      parents.push(root);
      return;
    }
    findParents(root.left, currDepth + 1);
    findParents(root.right, currDepth + 1);
  }

  findParents(root);

  for (const parent of parents) {
    let left = parent.left;
    let right = parent.right;
    parent.left = new TreeNode(val);
    parent.right = new TreeNode(val);
    parent.left.left = left;
    parent.right.right = right;
  }

  return root;
};
