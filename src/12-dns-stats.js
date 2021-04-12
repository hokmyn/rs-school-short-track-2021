/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objRes = {};
  let arr = [];
  for (let i = 0; i < domains.length; i += 1) {
    arr = domains[i].split('.');
    let tmp = '';
    for (let j = arr.length - 1; j >= 0; j -= 1) {
      tmp += `.${arr[j]}`;
      if (!objRes[tmp]) {
        objRes[tmp] = 1;
      } else {
        objRes[tmp] += 1;
      }
    }
  }
  return objRes;
}

module.exports = getDNSStats;
