/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.idx = 0;
  this.history = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.idx++;
  this.history = [...this.history.slice(0, this.idx), url];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.idx = Math.max(0, this.idx - steps);
  return this.history[this.idx];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.idx = Math.min(this.history.length - 1, this.idx + steps);
  return this.history[this.idx];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
