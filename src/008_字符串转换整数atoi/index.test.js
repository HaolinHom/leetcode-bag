const utils = require('../../utils');
const myAtoi = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['42   '],
    expected: 42,
  },
  {
    args: ['    -42'],
    expected: -42,
  },
  {
    args: ['4193 with words'],
    expected: 4193,
  },
  {
    args: ['words and 987'],
    expected: 0,
  },
  {
    args: ['-91283472332'],
    expected: -2147483648,
  },
  {
    args: ['00800'],
    expected: 800,
  },
  {
    args: [' +0 132'],
    expected: 0,
  },
]);

test.each(testData)(
  '字符串转换整数(atoi) (输入: %j，目标值: %d): ',
  (str, expected) => {
    expect(myAtoi(str)).toEqual(expected);
  }
);

// test command: jest src/008_字符串转换整数atoi/index.test.js
