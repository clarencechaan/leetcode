/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function (message, limit) {
  function isValid(numParts) {
    const numPartsLength = numParts.toString().length;
    // `prefixLength` for 1 to 9 is `limit - 4 - numPartsLength`
    // `prefixLength` for 10 to 99 is `limit - 5 - numPartsLength`
    // ...

    let remainingMessageLength = message.length;

    // 1 to 9
    let prefixLength = limit - 4 - numPartsLength;
    remainingMessageLength -= prefixLength * Math.min(numParts, 9);
    if (numParts <= 9) return remainingMessageLength <= 0;

    // 10 to 99
    prefixLength--;
    remainingMessageLength -= prefixLength * (Math.min(numParts, 99) - 9);
    if (numParts <= 99) return remainingMessageLength <= 0;

    // 100 to 999
    prefixLength--;
    remainingMessageLength -= prefixLength * (Math.min(numParts, 999) - 99);
    if (numParts <= 999) return remainingMessageLength <= 0;

    // 1000 to 9999
    prefixLength--;
    remainingMessageLength -= prefixLength * (Math.min(numParts, 9999) - 999);
    if (numParts <= 999) return remainingMessageLength <= 0;

    // 10000
    prefixLength--;
    remainingMessageLength -= prefixLength;
    return remainingMessageLength <= 0;
  }

  function getParts(numParts) {
    const arr = [];
    let count = 0;
    for (let i = 0; i < message.length; ) {
      count++;
      const suffix = `<${count}/${numParts}>`;
      const prefixLength = limit - suffix.length;
      const prefix = message.slice(i, i + prefixLength);
      arr.push(`${prefix}${suffix}`);
      i += prefixLength;
    }
    return arr;
  }

  for (let numParts = 1; numParts <= message.length; numParts++)
    if (isValid(numParts)) return getParts(numParts);
  return [];
};
