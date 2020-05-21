/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(null);
  let temp = result;

  let sum = 0;
  let carry = 0;

  while (l1 || l2) {
    sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;
    carry = sum >= 10 ? 1 : 0;

    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    result.val = sum;

    l1 = l1 && l1.next || null;
    l2 = l2 && l2.next || null;
  }

  if (carry > 0) {
    temp.next = new ListNode(carry);
  }

  return result.next;
};

module.exports = addTwoNumbers;
