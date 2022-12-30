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
var BSTIterator = function (root) {
  let arr = [];

  function buildArr(root) {
    if (!root) return;
    buildArr(root.left);
    arr.push(root.val);
    buildArr(root.right);
  }

  buildArr(root);

  this.arr = arr;
  this.cursor = -1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.cursor++;
  return this.arr[this.cursor];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.cursor + 1 >= 0 && this.cursor + 1 < this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
