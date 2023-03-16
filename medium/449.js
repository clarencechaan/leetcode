/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let arr = [];

  function recurse(root, depth = 0) {
    if (!arr[depth]) arr[depth] = [];
    if (!root) return;
    arr[depth].push(root.val);
    recurse(root.left, depth + 1);
    recurse(root.right, depth + 1);
  }

  recurse(root);

  arr = arr.slice(0, arr.length - 1);
  let str = "";
  for (const row of arr) str += row.toString() + ",";
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;

  let nums = data.split(",").map((char) => parseInt(char));
  nums.pop();
  nums.reverse();

  let tree = new TreeNode(nums.pop());
  while (nums.length) {
    let curr = tree;
    let num = nums.pop();
    while (curr)
      if (num > curr.val)
        if (curr.right) curr = curr.right;
        else {
          curr.right = new TreeNode(num);
          break;
        }
      else if (num < curr.val)
        if (curr.left) curr = curr.left;
        else {
          curr.left = new TreeNode(num);
          break;
        }
  }
  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

let tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(8, null, new TreeNode(9, null, null))
);

//    5
//  3   8
// 2 4   9

let serialized = serialize(tree);
console.log(serialized);
let deserialized = deserialize(serialized);
console.log(deserialized);
