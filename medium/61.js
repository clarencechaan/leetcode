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
var rotateRight = function (head, k) {
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  let leftList = new ListNode();
  let currL = leftList;
  let rightList = new ListNode();
  let currR = rightList;

  const leftListLength = k % length;
  const rightListLength = length - leftListLength;

  curr = head;
  let count = 0;
  while (curr) {
    if (count < rightListLength) {
      currR.next = new ListNode(curr.val);
      currR = currR.next;
    } else {
      currL.next = new ListNode(curr.val);
      currL = currL.next;
    }
    curr = curr.next;
    count++;
  }

  currL.next = rightList.next;

  return leftList.next;
};
