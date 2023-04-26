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
var CBTInserter = function (root) {
  function countNodes(root) {
    if (!root) return 0;
    let leftCount = countNodes(root.left);
    let rightCount = countNodes(root.right);
    return 1 + (leftCount ? leftCount + rightCount : 0);
  }

  this.count = countNodes(root);
  this.root = root;
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let row = 0;
  let col = this.count;
  for (let i = 0; col - Math.pow(2, i) >= 0; i++) {
    row++;
    col -= Math.pow(2, i);
  }

  let path = "";
  while (row > 0) {
    row--;
    if (col % 2 === 0) path = "L" + path;
    else path = "R" + path;
    col = Math.floor(col / 2);
  }

  function findParent(root, path) {
    if (path.length === 1) return root;
    if (path[0] === "L") return findParent(root.left, path.substring(1));
    else if (path[0] === "R") return findParent(root.right, path.substring(1));
  }

  let parent = findParent(this.root, path);

  if (path.slice(-1) === "L") parent.left = new TreeNode(val);
  else if (path.slice(-1) === "R") parent.right = new TreeNode(val);

  this.count++;

  return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
