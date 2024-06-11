/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function (trees) {
  let numNodes = new Set();

  const roots = [];
  for (const tree of trees) {
    numNodes.add(tree.val);
    if (tree.left) numNodes.add(tree.left.val);
    if (tree.right) numNodes.add(tree.right.val);
    roots[tree.val] = tree;
  }

  numNodes = numNodes.size;

  const treeSizeMemo = {};
  function getTreeSize(
    root,
    min = -Infinity,
    max = Infinity,
    seen = new Set()
  ) {
    if (!root) return 0;

    if (seen.has(root)) return -Infinity;
    seen.add(root);

    if (root < min || root > max) return -Infinity;

    const str = `${root},${min},${max}`;
    if (treeSizeMemo[str] !== undefined) return treeSizeMemo[str];

    const tree = roots[root];
    const result =
      1 +
      getTreeSize(tree?.left?.val || null, min, tree?.val, seen) +
      getTreeSize(tree?.right?.val || null, tree?.val, max, seen);

    treeSizeMemo[str] = result;

    return result;
  }

  function getTree(root) {
    if (!root) return null;
    const tree = roots[root] || new TreeNode(root);

    const left = getTree(roots[root]?.left?.val);
    const right = getTree(roots[root]?.right?.val);
    tree.left = left;
    tree.right = right;

    return tree;
  }

  for (const tree of trees)
    if (getTreeSize(tree.val) === numNodes) return getTree(tree.val);

  return null;
};
