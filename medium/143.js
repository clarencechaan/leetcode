/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  const n = arr.length - 1;

  for (let i = 0; i <= n / 2; i++) arr[i].next = arr[n - i];
  for (let i = n; i > Math.round(n / 2); i--) arr[i].next = arr[n - i + 1];
  arr[Math.round(n / 2)].next = null;
};

// n = 6
// 0 -> 6 -> 1 -> 5 -> 2 -> 4 -> 3

// n = 5
// 0 -> 5 -> 1 -> 4 -> 2 -> 3

// n = 3
// 0 -> 1 -> 2 -> 3
// 0 -> 3 -> 1 -> 2
