goog.module('googModule1');

/**
 * @param {number} n
 * @return {string}
 */
exports = function(n) {
  let msg = 'goog';
  for (let i = 0; i < n; i++) {
    msg += '!';
  }
  return msg;
}
