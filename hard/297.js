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
  if (!root) return "";

  let arr = [];
  function recurse(root, path = "") {
    if (!root) return;
    arr.push([root.val, path]);
    recurse(root.left, path + "L");
    recurse(root.right, path + "R");
  }
  recurse(root);

  let str = arr.map((pair) => pair.join(",")).join(":");
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

  let arr = data.split(":").map((str) => str.split(","));
  let map = {};
  for (const [val, path] of arr) map[path] = val;

  let tree = new TreeNode(arr[0][0]);
  function recurse(curr = tree, path = "") {
    if (map[path + "L"]) {
      curr.left = new TreeNode(map[path + "L"]);
      recurse(curr.left, path + "L");
    }
    if (map[path + "R"]) {
      curr.right = new TreeNode(map[path + "R"]);
      recurse(curr.right, path + "R");
    }
  }
  recurse();

  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
