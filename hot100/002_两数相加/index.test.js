const utils = require('../utils');
const addTwoNumbersUtils = require('./utils');
const addTwoNumbers = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [
      addTwoNumbersUtils.createListNode([2,4,3]),
      addTwoNumbersUtils.createListNode([5,6,4]),
    ],
    expected: addTwoNumbersUtils.createListNode([7,0,8]),
  },
  {
    args: [
      addTwoNumbersUtils.createListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
      addTwoNumbersUtils.createListNode([5,6,4]),
    ],
    expected: addTwoNumbersUtils.createListNode([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),
  },
]);

test.each(testData)(
  '* 两数相加: ',
  (link1, link2, expected) => {
    expect(addTwoNumbers(link1, link2)).toEqual(expected);
  }
);

// test command: jest hot100/002_两数相加/index.test.js
