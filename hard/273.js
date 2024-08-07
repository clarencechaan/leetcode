/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) return "Zero";

  const DIGIT_TO_WORD = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const TENS_TO_WORD = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const TEENS_TO_WORD = {
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
  };

  const TENSPLACE_TO_WORD = [
    "",
    "",
    "Hundred",
    "Thousand",
    "",
    "Hundred",
    "Million",
    "",
    "Hundred",
    "Billion",
  ];

  function getWords(start, end) {
    const digit1 = num[start];
    if (end - start === 1)
      return [DIGIT_TO_WORD[digit1], TENSPLACE_TO_WORD[num.length - end]];

    if (digit1 === "0") return getWords(start + 1, end);

    const digit2 = num[start + 1];
    if (digit1 === "1")
      return [
        TEENS_TO_WORD[digit1 + digit2],
        TENSPLACE_TO_WORD[num.length - end],
      ];

    return [
      TENS_TO_WORD[digit1],
      DIGIT_TO_WORD[digit2],
      TENSPLACE_TO_WORD[num.length - end],
    ];
  }

  num = num.toString();

  let result = [];
  for (let i = 0; i < num.length; i++) {
    const tensPlace = num.length - 1 - i;
    switch (tensPlace) {
      case 1:
      case 4:
      case 7:
        result.push(...getWords(i, i + 2));
        i++;
        break;
      default:
        result.push(...getWords(i, i + 1));
    }
  }

  result = result.filter((word) => word);
  for (let i = 1; i < result.length; i++) {
    const idx1 = TENSPLACE_TO_WORD.indexOf(result[i - 1]);
    const idx2 = TENSPLACE_TO_WORD.indexOf(result[i]);
    if (idx1 >= 0 && idx2 >= 0 && idx1 >= idx2) {
      result.splice(i, 1);
      i--;
    }
  }

  return result.join(" ");
};

console.log(numberToWords(123));
