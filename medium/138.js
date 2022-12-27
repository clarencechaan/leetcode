/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let arr = [];
  let curr = head;
  let idx = 0;
  while (curr) {
    arr.push({ val: curr.val });
    curr.idx = idx;
    idx++;
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    arr[curr.idx].randomIdx =
      curr.random?.idx !== undefined ? curr.random.idx : null;
    curr = curr.next;
  }

  let nodes = arr.map((obj) => new Node(obj.val));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  for (let i = 0; i < nodes.length; i++)
    nodes[i].random = nodes[arr[i].randomIdx];
  return nodes[0] || null;
};
