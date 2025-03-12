var ATM = function () {
  this.notes = [0, 0, 0, 0, 0];
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
  for (let i = 0; i < 5; i++) this.notes[i] += banknotesCount[i];
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
  const result = [0, 0, 0, 0, 0];
  const noteMap = [20, 50, 100, 200, 500];

  for (let i = 4; i >= 0; i--) {
    const note = noteMap[i];
    const count = Math.min(Math.floor(amount / note), this.notes[i]);
    amount -= note * count;
    result[i] = count;
  }

  if (amount > 0) return [-1];
  for (let i = 0; i < 5; i++) this.notes[i] -= result[i];
  return result;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
