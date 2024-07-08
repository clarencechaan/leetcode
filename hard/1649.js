/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function (instructions) {
  const sorted = [...new Set(instructions)].sort((a, b) => (a > b ? 1 : -1));

  const nodeMap = {};
  function createBST(start = 0, end = sorted.length, parent = null) {
    if (start === end) return null;
    const mid = Math.floor((start + end) / 2);
    const bst = { val: sorted[mid], sum: 0, count: 0, parent };
    nodeMap[bst.val] = bst;
    const left = createBST(start, mid, bst);
    const right = createBST(mid + 1, end, bst);
    bst.left = left;
    bst.right = right;
    return bst;
  }

  const bst = createBST();

  function addToBST(num) {
    let node = nodeMap[num];
    node.count++;
    while (node) {
      node.sum++;
      node = node.parent;
    }
  }

  function countLessThan(bst, num) {
    if (!bst) return 0;
    if (bst.val < num)
      return (bst?.left?.sum || 0) + bst.count + countLessThan(bst.right, num);
    else if (bst.val > num) return countLessThan(bst.left, num);
    return bst.left?.sum || 0;
  }

  function countGreaterThan(bst, num) {
    if (!bst) return 0;
    if (bst.val > num)
      return (
        (bst?.right?.sum || 0) + bst.count + countGreaterThan(bst.left, num)
      );
    else if (bst.val < num) return countGreaterThan(bst.right, num);
    return bst.right?.sum || 0;
  }

  let ans = 0;
  for (const num of instructions) {
    ans += Math.min(countLessThan(bst, num), countGreaterThan(bst, num));
    ans %= 10 ** 9 + 7;
    addToBST(num);
  }

  return ans;
};

console.log(createSortedArray([1, 5, 6, 2]));
