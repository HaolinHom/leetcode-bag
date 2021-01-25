/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (-10 < x && x < 10) {
    return x;
  }

  if (x < -2147483648 || 2147483648 <= x) {
    return 0;
  }

  let result = (x < 0 ? x.toString().slice(1) : x.toString()).split('');
  let len = result.length;
  let loop = (len % 2 > 0 ? len - 1 : len) / 2;
  let temp;

  for (let i = 0; i < loop; i++) {
    temp = result[i];
    result[i] = result[len - 1 - i];
    result[len - 1 - i] = temp;
    temp = undefined;
  }

  if (x < 0) {
    result.unshift('-');
  }

  result = Number(result.join(''));

  return -2147483648 <= result && result <= 2147483647 ? result : 0;
};

module.exports = reverse;