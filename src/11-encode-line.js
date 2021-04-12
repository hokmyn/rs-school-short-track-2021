/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;
  let strRes = '';
  if (str.length > 0) {
    for (let i = 0; i < str.length; i += 1) {
      if (str[i + 1] === str[i]) {
        n += 1;
      } else if (n > 1) {
        strRes += `${n}${str[i]}`;
        n = 1;
      } else {
        strRes += str[i];
      }
    }
  }
  return strRes;
}

module.exports = encodeLine;
