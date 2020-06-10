/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 123,134
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(null);

  let node = result;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }

  node.next = l1 === null ? l2 : l1;

  return result.next;
};

module.exports = mergeTwoLists;
