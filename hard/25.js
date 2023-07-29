/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  for (let i = Math.floor(arr.length / k) * k - 1; i >= 0; i--)
    arr[i].next = arr[i - 1] || null;

  for (let i = 0; i < Math.floor(arr.length / k) * k - 1; i += k)
    arr[i].next = arr[i + 2 * k - 1] || arr[i + k] || null;

  return arr[k - 1];
};
