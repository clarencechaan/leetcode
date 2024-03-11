/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  // 1. declare the m x n matrix and fill with -1
  // 2. visualize the matrix
  //    0  1  2  3  4  5
  //  0 0  1  2  3  4  5
  //  1 15 16 17 18 19 6
  //  2 14 23 22 21 20 7
  //  3 13 12 11 10 9  8
  // 3. what do we notice? keep going right until we hit the end of the row or we hit a filled in number
  //    => repeat, but moving down... then left, then up, then right again

  // declare result matrix
  const matrix = [];
  for (let i = 0; i < m; i++) matrix.push(Array(n).fill(-1));

  // direction
  // 0: right
  // 1: down
  // 2: left
  // 3: up
  let direction = 0;
  let curr = head;
  let row = 0;
  let col = 0;

  // return true if the neighbouring cell from matrix[row][col] going in direction "direction" is valid
  function isNextCellValid(row, col, direction) {
    switch (direction) {
      case 0:
        // move right
        return matrix[row][col + 1] === -1;
      case 1:
        // move down
        return matrix[row + 1]?.[col] === -1;
      case 2:
        // move left
        return matrix[row][col - 1] === -1;
      case 3:
        // move up
        return matrix[row - 1]?.[col] === -1;
    }
  }

  // iterate through linked list
  while (curr) {
    matrix[row][col] = curr.val;
    // keep changing direction until direction is valid
    while (!isNextCellValid(row, col, direction) && curr.next)
      direction = (direction + 1) % 4;
    switch (direction) {
      case 0:
        // move right
        col++;
        break;
      case 1:
        // move down
        row++;
        break;
      case 2:
        // move left
        col--;
        break;
      case 3:
        // move up
        row--;
        break;
    }
    curr = curr.next;
  }

  return matrix;
};
