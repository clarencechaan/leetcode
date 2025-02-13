/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const n = arr.length;
  let max = 0;
  for (let i = 0; i < n / 2; i++) {
    max = Math.max(max, arr[i] + arr[n - 1 - i]);
  }
  return max;
};
