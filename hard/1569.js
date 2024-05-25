/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  // create the bst

  function addNode(node, bst) {
    if (node.val < bst.val) {
      if (bst.left) addNode(node, bst.left);
      else bst.left = node;
    } else if (node.val > bst.val) {
      if (bst.right) addNode(node, bst.right);
      else bst.right = node;
    }
  }

  const nodes = [];
  for (const num of nums) nodes[num] = { val: num };

  const bst = nodes[nums[0]];
  for (let i = 1; i < nums.length; i++) addNode(nodes[nums[i]], bst);

  function countChildren(node) {
    if (!node) return 0;
    const children = 1 + countChildren(node.left) + countChildren(node.right);
    node.children = children;
    return children;
  }

  countChildren(nodes[nums[0]]);

  function factorial(n) {
    if (n <= 1n) return 1n;
    return n * factorial(n - 1n);
  }

  function choose(n, r) {
    n = BigInt(n);
    r = BigInt(r);
    return factorial(n) / (factorial(r) * factorial(n - r));
  }

  function recursiveNumWays(nodeVal) {
    if (!nodeVal) return 1n;
    const node = nodes[nodeVal];

    const leftWays = recursiveNumWays(node.left?.val);
    const rightWays = recursiveNumWays(node.right?.val);
    const leftSize = BigInt(node.left?.children || 0);
    const rightSize = BigInt(node.right?.children || 0);

    return choose(leftSize + rightSize, leftSize) * leftWays * rightWays;
  }

  return Number((recursiveNumWays(nums[0]) - 1n) % (10n ** 9n + 7n));
};

console.log(numOfWays([2, 1, 3]));
