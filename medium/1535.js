/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let winner = null;
  let streak = 0;

  let max = 0;
  let list = { val: 0, next: null };
  let tail = list;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    tail.next = { val: arr[i], next: null };
    tail = tail.next;
  }
  list = list.next;

  while (streak < k) {
    if (winner === max) return winner;
    if (list.val > list.next.val) {
      if (winner === list.val) streak++;
      else {
        winner = list.val;
        streak = 1;
      }
      let temp = list.next;
      list.next = list.next.next;
      temp.next = null;
      tail.next = temp;
      tail = tail.next;
    } else {
      if (winner === list.next.val) streak++;
      else {
        winner = list.next.val;
        streak = 1;
      }
      let temp = list;
      list = list.next;
      temp.next = null;
      tail.next = temp;
      tail = tail.next;
    }
  }

  return winner;
};

console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2));
