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
var insertionSortList = function (head) {
  let sorted = null;

  function insert(node) {
    let prev = null;
    let curr = sorted;

    while (curr) {
      if (curr.val < node.val) {
        prev = curr;
        curr = curr.next;
      } else break;
    }

    let newNode = new ListNode(node.val, curr);
    if (prev) prev.next = newNode;
    else sorted = newNode;
  }

  let curr = head;
  while (curr) {
    insert(curr);
    curr = curr.next;
  }
  return sorted;
};
