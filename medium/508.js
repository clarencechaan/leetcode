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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  let arr = [];

  function buildArr(root) {
    if (!root) return;
    if (!root.left && !root.right) root.sum = root.val;
    arr.push(root);
    buildArr(root.left);
    buildArr(root.right);
  }

  buildArr(root);

  for (let i = arr.length - 1; i >= 0; i--) {
    let leftSum;
    let rightSum;
    if (!arr[i].left || arr[i].left.sum !== undefined)
      leftSum = arr[i].left?.sum || 0;
    if (!arr[i].right || arr[i].right.sum !== undefined)
      rightSum = arr[i].right?.sum || 0;
    if (leftSum !== undefined && rightSum !== undefined)
      arr[i].sum = leftSum + rightSum + arr[i].val;
  }

  let freqMap = {};
  for (const node of arr) freqMap[node.sum] = (freqMap[node.sum] || 0) + 1;

  let maxFreq = 0;
  let vals = [];
  for (const sum in freqMap) {
    if (freqMap[sum] > maxFreq) {
      maxFreq = freqMap[sum];
      vals = [parseInt(sum)];
    } else if (freqMap[sum] === maxFreq) vals.push(parseInt(sum));
  }

  return vals;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tree = new TreeNode(
  5,
  new TreeNode(2, null, null),
  new TreeNode(-5, null, null)
);

console.log(findFrequentTreeSum(tree));
