/**
 * @param {number[]} w
 */
var Solution = function (w) {
  let probability = [0];
  let sum = 0;
  for (let i = 0; i < w.length; i++) {
    sum += w[i];
    probability[i] = sum;
  }
  this.probability = probability;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let sum = this.probability[this.probability.length - 1];
  let num = Math.floor(Math.random() * sum);

  let min = 0;
  let max = this.probability.length - 1;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if ((this.probability[mid - 1] || 0) <= num && num < this.probability[mid])
      break;
    else if (num < this.probability[mid]) max = mid - 1;
    else if (this.probability[mid] <= num) min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
