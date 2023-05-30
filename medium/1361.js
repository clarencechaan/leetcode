/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  let map = {};
  function buildMap(node = 0) {
    if (map[node] !== undefined) return map[node];
    let tree = { val: node, left: null, right: null, depth: 0 };
    map[node] = tree;
    if (leftChild[node] !== -1) tree.left = buildMap(leftChild[node]);
    if (rightChild[node] !== -1) tree.right = buildMap(rightChild[node]);
    tree.depth = 1 + Math.max(tree.left?.depth || 0, tree.right?.depth || 0);
    return tree;
  }

  for (let i = 0; i < n; i++) buildMap(i);

  let root = 0;
  for (let i = 1; i < n; i++) if (map[i].depth > map[root].depth) root = i;

  let history = new Set();
  function isValidTree(root) {
    if (!root) return true;
    if (history.has(root.val)) return false;
    history.add(root.val);
    return isValidTree(root.left) && isValidTree(root.right);
  }

  return isValidTree(map[root]) && history.size === n;
};

console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
