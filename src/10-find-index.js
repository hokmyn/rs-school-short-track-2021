/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstEl = 0;
  let lastEl = array.length - 1;
  let pos = -1;
  let isFound = false;
  let middlePos;

  while (isFound === false && firstEl <= lastEl) {
    middlePos = Math.floor((firstEl + lastEl) / 2);
    if (array[middlePos] === value) {
      isFound = true;
      pos = middlePos;
    } else if (array[middlePos] > value) {
      lastEl = middlePos - 1;
    } else {
      firstEl = middlePos + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
