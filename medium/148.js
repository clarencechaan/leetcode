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
var sortList = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }
  arr = arr.sort((a, b) => (a.val > b.val ? 1 : -1));
  for (let i = 0; i < arr.length; i++) arr[i].next = arr[i + 1] || null;
  return arr[0] || null;
};
