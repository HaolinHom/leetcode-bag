const utils = require('../../utils');
const countAndSay = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [1],
    expected: '1',
  },
  {
    args: [2],
    expected: '11',
  },
  {
    args: [3],
    expected: '21',
  },
  {
    args: [4],
    expected: '1211',
  },
  {
    args: [5],
    expected: '111221',
  },
  {
    args: [6],
    expected: '312211',
  },
  {
    args: [7],
    expected: '13112221',
  },
]);

test.each(testData)(
  '外观数列 (输入: %j，目标值: %s): ',
  (num, expected) => {
    expect(countAndSay(num)).toEqual(expected);
  }
);

// test command: jest src/038_外观数列/index.test.js
