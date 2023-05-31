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
var balanceBST = function (root) {
  let vals = [];
  function getVals(root) {
    if (!root) return;
    vals.push(root.val);
    getVals(root.left);
    getVals(root.right);
  }

  getVals(root);
  vals.sort((a, b) => (a > b ? 1 : -1));

  let tree;
  function buildTree(left = 0, right = vals.length) {
    if (left === right) return;
    let mid = Math.floor((left + right) / 2);
    addValToTree(vals[mid]);
    buildTree(left, mid);
    buildTree(mid + 1, right);
  }

  function addValToTree(val, node = tree) {
    if (!tree) tree = new TreeNode(val);
    else if (node.val > val) {
      if (node.left) addValToTree(val, node.left);
      else node.left = new TreeNode(val);
    } else if (node.val < val) {
      if (node.right) addValToTree(val, node.right);
      else node.right = new TreeNode(val);
    }
  }

  buildTree();
  return tree;
};
