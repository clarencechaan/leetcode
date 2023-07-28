/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let arr = [];
  for (let curr of lists)
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }

  arr = quickSort(arr);

  for (let i = 0; i < arr.length; i++) arr[i].next = arr[i + 1] || null;
  return arr[0] || null;
};

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++)
    if (arr[i].val < pivot.val) left.push(arr[i]);
    else right.push(arr[i]);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
