const utils = require('../../utils');
const divide = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [10, 3],
    expected: 3,
  },
  {
    args: [7, -3],
    expected: -2,
  },
  {
    args: [1, 1],
    expected: 1,
  },
  {
    args: [-2147483648, 1],
    expected: -2147483648,
  },
]);

test.each(testData)(
  '两数相除 (输入: %j，目标值: %d): ',
  (dividend, divisor, expected) => {
    expect(divide(dividend, divisor)).toEqual(expected);
  }
);

// test command: jest src/029_两数相除/index.test.js
