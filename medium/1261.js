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
 */
var FindElements = function (root) {
  let set = new Set();

  function recoverTree(root, x = 0) {
    if (!root) return;
    set.add(x);
    if (root.left) recoverTree(root.left, 2 * x + 1);
    if (root.right) recoverTree(root.right, 2 * x + 2);
  }

  recoverTree(root);

  this.set = set;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
