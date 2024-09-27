var TextEditor = function () {
  this.left = [];
  this.right = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  this.left.push(...text);
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  if (this.left.length < k) k = this.left.length;
  for (let i = 0; i < k; i++) this.left.pop();
  return k;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  if (this.left.length < k) k = this.left.length;
  for (let i = 0; i < k; i++) this.right.push(this.left.pop());
  return this.left.slice(-10).join("");
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  if (this.right.length < k) k = this.right.length;
  for (let i = 0; i < k; i++) this.left.push(this.right.pop());
  return this.left.slice(-10).join("");
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
