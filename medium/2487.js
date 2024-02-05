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
var removeNodes = function (head) {
  let max = [];
  let curr = head;
  while (curr) {
    max.push(curr.val);
    curr = curr.next;
  }
  for (let i = max.length - 2; i >= 0; i--)
    max[i] = Math.max(max[i], max[i + 1]);

  let list = new ListNode();
  list.next = head;
  let prev = list;
  let idx = 0;
  curr = head;
  while (curr) {
    if (curr.val < max[idx]) prev.next = curr.next;
    else prev = curr;
    curr = curr.next;
    idx++;
  }

  return list.next;
};
