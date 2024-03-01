/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let count = 0;
  let curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count === 1) return null;

  const mid = Math.floor(count / 2);
  curr = head;
  for (let i = 0; i < mid - 1; i++) curr = curr.next;
  curr.next = curr.next.next;

  return head;
};
