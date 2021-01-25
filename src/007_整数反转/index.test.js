const utils = require('../../utils');
const reverse = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [123],
    expected: 321,
  },
  {
    args: [-123],
    expected: -321,
  },
  {
    args: [120],
    expected: 21,
  },
  {
    args: [-4],
    expected: -4,
  },
  {
    args: [6],
    expected: 6,
  },
  {
    args: [0],
    expected: 0,
  },
  {
    args: [2147483641],
    expected: 1463847412,
  },
  {
    args: [-2147483641],
    expected: -1463847412,
  },
  {
    args: [2147483648],
    expected: 0,
  },
  {
    args: [-2147483649],
    expected: 0,
  },
  {
    // 逆序大于2^31 - 1
    args: [1534236469],
    expected: 0,
  }
]);

test.each(testData)(
  '整数反转(输入: %j，目标值: %d): ',
  (x, expected) => {
    expect(reverse(x)).toEqual(expected);
  }
);

// test command: jest src/007_整数反转/index.test.js
