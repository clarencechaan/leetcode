/**
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  let filtered = [];
  for (let i = 0; i < encoding.length; i += 2) {
    if (encoding[i] === 0) continue;
    filtered.push(encoding[i]);
    filtered.push(encoding[i + 1]);
  }
  filtered.reverse();
  this.encoding = filtered;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  let encoding = this.encoding;

  function clearEmpty() {
    if (encoding[encoding.length - 1] === 0) {
      encoding.pop();
      encoding.pop();
    }
  }

  while (n > 1) {
    let subtract = Math.min(n - 1, encoding[encoding.length - 1]);
    n -= subtract;
    encoding[encoding.length - 1] -= subtract;
    clearEmpty();
  }

  if (!encoding.length) return -1;
  let elem = encoding[encoding.length - 2];
  encoding[encoding.length - 1]--;
  clearEmpty();

  return elem;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
