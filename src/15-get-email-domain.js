/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arrRes = [];
  arrRes = email.split('@');
  return arrRes[arrRes.length - 1];
}

module.exports = getEmailDomain;
