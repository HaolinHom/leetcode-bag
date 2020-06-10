const utils = require('../../utils');
const isValid = require('./index');

const testData = utils.getEachTestParams([
  {
    args: ["()"],
    expected: true,
  },
  {
    args: ["()[]{}"],
    expected: true,
  },
  {
    args: ['(]'],
    expected: false,
  },
  {
    args: ['([)]'],
    expected: false,
  },
  {
    args: ["{[]}"],
    expected: true,
  },
]);

test.each(testData)(
  '# 有效的括号: ',
  (str, expected) => {
    expect(isValid(str)).toBe(expected);
  }
);

// test command: jest hot100/020_有效的括号/index.test.js
