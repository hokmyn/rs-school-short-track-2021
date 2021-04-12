/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOnesIdx = [];
  let arrRes = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      arrOnesIdx.push(i);
    }
  }
  arrRes = arr.filter((el) => el !== -1);
  arrRes.sort((a, b) => {
    Array.isArray(arrRes);
    return a - b;
  });
  for (let i = 0; i < arrOnesIdx.length; i += 1) {
    arrRes.splice(arrOnesIdx[i], 0, -1);
  }
  return arrRes;
}

module.exports = sortByHeight;
