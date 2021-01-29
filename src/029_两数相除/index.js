/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let isOdd = false;
  if (dividend < 0) {
    dividend = Math.abs(dividend);
    isOdd = !isOdd;
  }
  if (divisor < 0) {
    divisor = Math.abs(divisor);
    isOdd = !isOdd;
  }

  let count = 0;

  if (divisor === 1) {
    count = dividend;
  } else {
    while (dividend >= divisor) {
      dividend -=divisor;
      count++;
    }

    if (count === 0) {
      return 0;
    }
  }

  if (isOdd) {
    count = 0 - count;
  }

  if (count < -2147483648) {
    return -2147483648;
  } else if (count > 2147483647) {
    return 2147483647;
  }

  return count;
};

module.exports = divide;