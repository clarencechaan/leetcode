/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  let arr = [];
  while (iterator.hasNext()) arr.push(iterator.next());
  this.arr = arr;
  this.pointer = 0;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.arr[this.pointer];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  this.pointer++;
  return this.arr[this.pointer - 1];
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.pointer < this.arr.length;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
