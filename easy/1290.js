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
var getDecimalValue = function (head) {
  let binary = "";

  let curr = head;
  while (curr) {
    binary += curr.val;
    curr = curr.next;
  }

  return parseInt(binary, 2);
};
