/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let decreasingIndices = [];
  for (let i = 1; i < arr.length; i++)
    if (arr[i - 1] > arr[i]) decreasingIndices.push(i);
  if (!decreasingIndices.length) return 0;

  let split1 = decreasingIndices[0];
  let split2 = decreasingIndices[decreasingIndices.length - 1] - 1;

  function minRemovals(split1, split2) {
    if (
      split1 === 0 ||
      split2 === arr.length - 1 ||
      arr[split1 - 1] <= arr[split2 + 1]
    )
      return 0;
    return Math.min(
      1 + minRemovals(split1 - 1, split2),
      1 + minRemovals(split1, split2 + 1)
    );
  }
  return split2 - split1 + 1 + minRemovals(split1, split2);
};

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]));
