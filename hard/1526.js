/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  function getSegmentTree(start = 0, end = target.length) {
    if (start === end) return null;
    if (end - start === 1)
      return {
        range: [start, end],
        min: target[start],
        left: null,
        right: null,
      };

    const mid = Math.floor((start + end) / 2);
    const tree = { range: [start, end] };
    const left = getSegmentTree(start, mid);
    const right = getSegmentTree(mid, end);
    tree.left = left;
    tree.right = right;
    tree.min = Math.min(left?.min || Infinity, right?.min || Infinity);
    return tree;
  }

  const segmentTree = getSegmentTree();

  function getMin(start, end, tree = segmentTree) {
    if (!tree || end < tree.range[0] || start > tree.range[1]) return Infinity;
    if (start <= tree.range[0] && tree.range[1] <= end) return tree.min;
    return Math.min(
      getMin(start, end, tree.left),
      getMin(start, end, tree.right)
    );
  }

  const indicesMap = {};
  for (let i = 0; i < target.length; i++)
    if (!indicesMap[target[i]]) indicesMap[target[i]] = [i];
    else indicesMap[target[i]].push(i);

  function recursion(start = 0, end = target.length) {
    if (start >= end) return 0;
    if (end - start === 1)
      return target[start] - Math.max(target[start - 1] || 0, target[end] || 0);

    const min = getMin(start, end);

    const indices = [
      start - 1,
      ...indicesMap[min].filter((num) => start <= num && num < end),
      end,
    ];

    let result = min - Math.max(target[start - 1] || 0, target[end] || 0);

    for (let i = 0; i < indices.length - 1; i++)
      result += recursion(indices[i] + 1, indices[i + 1]);

    return result;
  }

  return recursion();
};

console.log(minNumberOperations([1, 2, 3, 2, 1]));
