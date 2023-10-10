var FrequencyTracker = function () {
  this.numToFreq = {};
  this.freqToNum = {};
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  let freq = this.numToFreq[number] || 0;
  this.numToFreq[number] = freq + 1;
  this.freqToNum[freq] = (this.freqToNum[freq] || 1) - 1;
  this.freqToNum[freq + 1] = (this.freqToNum[freq + 1] || 0) + 1;
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  let freq = this.numToFreq[number];
  if (!freq) return;

  this.freqToNum[freq]--;
  if (freq - 1 > 0)
    this.freqToNum[freq - 1] = (this.freqToNum[freq - 1] || 0) + 1;
  this.numToFreq[number] = freq - 1;
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  return !!this.freqToNum[frequency];
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
