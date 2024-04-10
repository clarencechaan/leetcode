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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  // idea:
  // 1. traverse the tree, keeping track of each node at an odd level, using an array of arrays
  // 2. iterate through each odd level in our array from step 1, keeping track of the values in a temporary array
  // 3. reverse our temporary array
  // 4. using this temporary array, overwrite the nodes in our array of arrays from step 1

  function getOddLevels(root, depth = 0, oddLevels = []) {
    if (!root) return;
    if (depth % 2 === 1) {
      const idx = Math.floor(depth / 2);
      if (!oddLevels[idx]) oddLevels[idx] = [];
      oddLevels[idx].push(root);
    }
    getOddLevels(root.left, depth + 1, oddLevels);
    getOddLevels(root.right, depth + 1, oddLevels);
    return oddLevels;
  }

  const oddLevels = getOddLevels(root);
  for (const row of oddLevels) {
    const vals = [];
    for (const node of row) vals.push(node.val);
    vals.reverse();
    for (let i = 0; i < row.length; i++) row[i].val = vals[i];
  }

  return root;
};
