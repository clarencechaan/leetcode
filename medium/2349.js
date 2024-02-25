var NumberContainers = function () {
  this.arr = [];
  this.map = {};
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  if (this.arr[index]) {
    const deleteIdx = binarySearch(this.map[this.arr[index]], index);
    this.map[this.arr[index]].splice(deleteIdx, 1);
  }
  this.arr[index] = number;
  if (!this.map[number]) this.map[number] = [];
  const addIdx = binarySearch(this.map[number], index);
  this.map[number].splice(addIdx, 0, index);
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  return this.map[number]?.[0] || -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (arr[mid] < target) min = mid + 1;
    else if (arr[mid] > target) max = mid;
    else break;
    mid = Math.floor((min + max) / 2);
  }
  return mid;
}
