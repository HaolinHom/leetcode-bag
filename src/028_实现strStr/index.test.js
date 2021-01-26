const utils = require('../../utils');
const strStr = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ['hello', 'll'],
    expected: 2,
  },
  {
    args: ['aaaaa', 'bba'],
    expected: -1,
  },
]);

test.each(testData)(
  '实现strStr() (输入: %j，目标值: %d): ',
  (haystack, needle, expected) => {
    expect(strStr(haystack, needle)).toEqual(expected);
  }
);

// test command: jest src/028_实现strStr/index.test.js
