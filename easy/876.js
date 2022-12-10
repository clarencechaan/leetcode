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
var middleNode = function (head) {
  let vals = [];
  let curr = head;
  while (curr) {
    vals.push(curr);
    curr = curr.next;
  }

  return vals[Math.floor(vals.length / 2)];
};
