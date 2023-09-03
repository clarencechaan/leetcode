var FrontMiddleBackQueue = function () {
  this.queue = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.queue.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let idx = Math.floor(this.queue.length / 2);
  this.queue.splice(idx, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  return this.queue.shift() || -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  let idx = Math.floor((this.queue.length - 1) / 2);
  return this.queue.splice(idx, 1)[0] || -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  return this.queue.pop() || -1;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
