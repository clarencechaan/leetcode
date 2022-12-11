/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let arr = [];

  let curr = l1;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  curr = l2;
  counter = 0;
  while (curr) {
    arr[counter] = arr[counter] ? arr[counter] + curr.val : curr.val;
    counter++;
    curr = curr.next;
  }

  for (let i = 0; i < arr.length; i++)
    if (arr[i] > 9) {
      arr[i] -= 10;
      arr[i + 1] = arr[i + 1] ? arr[i + 1] + 1 : 1;
    }

  let newList = new ListNode();
  curr = newList;

  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return newList.next;
};
