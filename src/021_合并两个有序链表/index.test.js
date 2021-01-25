const utils = require('../../utils');
const mergeTwoLists = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [
      utils.createListNode([1, 2, 4]),
      utils.createListNode([1, 3, 4]),
    ],
    expected: utils.createListNode([1, 1, 2 , 3, 4 , 4]),
  },
]);

test.each(testData)(
  '* 合并两个有序链表: ',
  (l1, l2, expected) => {
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  },
);

// test command: jest hot100/021_合并两个有序链表/index.test.js
