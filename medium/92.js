/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let arr = [];
  let count = 1;
  let curr = head;
  while (count <= right) {
    if (count >= left) arr.push(curr.val);
    curr = curr.next;
    count++;
  }
  let rightList = curr;

  let newList = new ListNode();
  curr = newList;
  curr.next = head;
  count = 0;
  while (count < left - 1) {
    curr = curr.next;
    count++;
  }

  while (arr.length) {
    curr.next = new ListNode(arr.pop());
    curr = curr.next;
  }
  curr.next = rightList;

  return newList.next;
};
