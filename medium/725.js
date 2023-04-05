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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  let partLength = Math.floor(length / k);
  let numPartsWithOneExtra = length - partLength * k;

  let result = [];
  curr = head;
  for (let i = 0; i < k; i++) {
    let size = partLength + (numPartsWithOneExtra > 0 ? 1 : 0);
    numPartsWithOneExtra--;
    result.push(curr);
    for (let j = 1; j < size; j++) if (curr) curr = curr.next;
    if (curr) {
      let temp = curr;
      curr = curr.next;
      temp.next = null;
    }
  }

  return result;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let ln = new ListNode(0, new ListNode(1, new ListNode(2, null)));

console.log(splitListToParts(ln, 3));
