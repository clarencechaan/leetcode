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
 * @return {number}
 */
var rob = function (root) {
  let nodeMoney = {};

  function traverse(root, node = "") {
    if (nodeMoney[node]) return nodeMoney[node];

    let children = 0;
    if (root.left) children += traverse(root.left, node + "L");
    if (root.right) children += traverse(root.right, node + "R");
    if (children === 0) {
      nodeMoney[node] = root.val;
      return root.val;
    }

    let grandchildren = 0;
    if (root.left?.left) grandchildren += traverse(root.left.left, node + "LL");
    if (root.left?.right)
      grandchildren += traverse(root.left.right, node + "LR");
    if (root.right?.left)
      grandchildren += traverse(root.right.left, node + "RL");
    if (root.right?.right)
      grandchildren += traverse(root.right.right, node + "RR");

    let money = Math.max(children, root.val + grandchildren);
    nodeMoney[node] = money;
    return money;
  }

  return traverse(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tn = new TreeNode(
  3,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(3, null, new TreeNode(1))
);

console.log(rob(tn));
