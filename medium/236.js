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
  let pAncestors = "";
  let qAncestors = "";

  function traverse(root, path = "") {
    if (!root) return;
    if (root === p) pAncestors = path;
    else if (root === q) qAncestors = path;
    traverse(root.left, path + "L");
    traverse(root.right, path + "R");
  }

  traverse(root);

  let sharedPath = "";

  for (let i = 0; i < Math.max(pAncestors.length, qAncestors.length); i++)
    if (pAncestors[i] !== qAncestors[i]) {
      sharedPath = pAncestors.substring(0, i);
      break;
    }

  let result = null;

  function findNode(path, root) {
    if (!path) result = root;
    if (path[0] === "L") findNode(path.substring(1), root.left);
    else if (path[0] === "R") findNode(path.substring(1), root.right);
  }

  findNode(sharedPath, root);

  return result;
};
