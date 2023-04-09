/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let parents = [];

  function findParents(head) {
    if (!head) return;
    if (head.child) {
      parents.push(head);
      findParents(head.child);
    }
    findParents(head.next);
  }

  findParents(head);
  for (const parent of parents) {
    let lastChild = parent.child;
    while (lastChild.next) lastChild = lastChild.next;
    lastChild.next = parent.next;
    if (parent.next) parent.next.prev = lastChild;
    parent.next = parent.child;
    parent.next.prev = parent;
    parent.child = null;
  }

  return head;
};
