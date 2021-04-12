/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  const resArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr.splice(i, 1);
    resArr.push(arr.join(''));
    arr = n.toString().split('');
  }
  resArr.sort((a, b) => {
    Array.isArray(resArr);
    return b - a;
  });
  return parseInt(resArr[0], 10);
}

module.exports = deleteDigit;
