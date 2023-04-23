var StockSpanner = function () {
  this.stocks = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  for (let i = this.stocks.length - 1; i >= 0 && this.stocks[i] <= price; i--)
    span++;
  this.stocks.push(price);
  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
