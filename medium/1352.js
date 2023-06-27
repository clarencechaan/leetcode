var ProductOfNumbers = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  this.arr.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  let prod = 1;
  for (let i = 0; i < k; i++) prod *= this.arr[this.arr.length - 1 - i];
  return prod;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
