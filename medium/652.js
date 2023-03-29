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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let subtrees = [];
  function getSubtrees(root) {
    if (!root) return;
    subtrees.push(root);
    getSubtrees(root.left);
    getSubtrees(root.right);
  }

  getSubtrees(root);

  let str = "";
  function treeToString(root) {
    str += (root?.val !== undefined ? root.val : "") + ",";
    if (!root) return;
    treeToString(root.left);
    treeToString(root.right);
  }

  let strTreeMap = {};
  for (const sub of subtrees) {
    treeToString(sub);
    if (!strTreeMap[str]) strTreeMap[str] = [];
    strTreeMap[str].push(sub);
    str = "";
  }

  let result = [];
  for (const str in strTreeMap)
    if (strTreeMap[str].length > 1) result.push(strTreeMap[str][0]);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tn = new TreeNode(
  0,
  new TreeNode(0, new TreeNode(0, null, null), null),
  new TreeNode(0, null, new TreeNode(0, null, new TreeNode(0, null, null)))
);

console.log(findDuplicateSubtrees(tn));
