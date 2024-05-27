const MOD = 10 ** 9 + 7;

var Fancy = function () {
  this.sequence = [];
  this.operations = [];
  this.appended = false;
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function (val) {
  this.sequence.push([val, this.operations.length]);
  this.appended = true;
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function (inc) {
  const top = this.operations[this.operations.length - 1];
  if (top?.[0] === "+" && !this.appended) top[1] = (top[1] + inc) % MOD;
  else this.operations.push(["+", inc]);
  this.appended = false;
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function (m) {
  const top = this.operations[this.operations.length - 1];
  if (top?.[0] === "*" && !this.appended) top[1] = (top[1] * m) % MOD;
  else this.operations.push(["*", m]);
  this.appended = false;
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function (idx) {
  if (idx >= this.sequence.length) return -1;

  let [val, oIdx] = this.sequence[idx];
  for (let i = oIdx; i < this.operations.length; i++)
    if (this.operations[i][0] === "*") {
      if (val * this.operations[i][1] > Number.MAX_SAFE_INTEGER)
        val = Number(
          (BigInt(val) * BigInt(this.operations[i][1])) % BigInt(MOD)
        );
      else val *= this.operations[i][1];
    } else val += this.operations[i][1];

  return val % MOD;
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
