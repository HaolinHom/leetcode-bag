const utils = require('../../utils');
const romanToInt = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['III'],
    expected: 3,
  },
  {
    args: ['IV'],
    expected: 4,
  },
  {
    args: ['IX'],
    expected: 9,
  },
  {
    args: ['LVIII'],
    expected: 58,
  },
  {
    args: ['MCMXCIV'],
    expected: 1994,
  },
  {
    args: ['CMCDXCXLIXIV'],
    expected: 1443,
  },
]);

test.each(testData)(
  '罗马数字转整数(输入: %j，目标值: %d): ',
  (str, expected) => {
    expect(romanToInt(str)).toEqual(expected);
  }
);

// test command: jest src/013_ 罗马数字转整数/index.test.js
