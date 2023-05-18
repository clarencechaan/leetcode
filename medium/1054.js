/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  let maxFreq = 0;
  let freqMap = {};
  for (const barcode of barcodes) {
    freqMap[barcode] = (freqMap[barcode] || 0) + 1;
    maxFreq = Math.max(maxFreq, freqMap[barcode]);
  }

  let freqToBarcode = [];
  for (let i = 0; i <= maxFreq; i++) freqToBarcode[i] = new Set();

  for (const barcode in freqMap)
    freqToBarcode[freqMap[barcode]].add(parseInt(barcode));

  let result = [];
  for (let i = freqToBarcode.length - 1; i > 0; i--) {
    for (const barcode of freqToBarcode[i])
      if (result[result.length - 1] !== barcode) {
        result.push(barcode);
        freqToBarcode[i - 1].add(barcode);
        freqToBarcode[i].delete(barcode);
        if (!freqToBarcode[freqToBarcode.length - 1].size) freqToBarcode.pop();
        i = freqToBarcode.length;
        break;
      }
  }

  return result;
};

console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));
