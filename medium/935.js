/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  let phonePad = [
    [1n, 1n, 1n],
    [1n, 1n, 1n],
    [1n, 1n, 1n],
    [0n, 1n, 0n],
  ];

  function nextPad(phonePad) {
    let result = [[], [], [], []];
    result[0][0] = phonePad[1][2] + phonePad[2][1];
    result[0][1] = phonePad[2][0] + phonePad[2][2];
    result[0][2] = phonePad[1][0] + phonePad[2][1];
    result[1][0] = phonePad[0][2] + phonePad[2][2] + phonePad[3][1];
    result[1][2] = phonePad[0][0] + phonePad[2][0] + phonePad[3][1];
    result[2][0] = phonePad[0][1] + phonePad[1][2];
    result[2][1] = phonePad[0][0] + phonePad[0][2];
    result[2][2] = phonePad[0][1] + phonePad[1][0];
    result[3][1] = phonePad[1][0] + phonePad[1][2];
    return result;
  }

  for (let i = 1; i < n; i++) phonePad = nextPad(phonePad);

  return Number(
    phonePad.reduce(
      (sum, row) => sum + row.reduce((sum, val) => sum + val, 0n),
      0n
    ) %
      (10n ** 9n + 7n)
  );
};

console.log(knightDialer(2));
