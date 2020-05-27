/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let arr = nums2;
  let lastTimeIndex = 0;

  nums1.forEach((num) => {
    if (num > arr[arr.length - 1]) {
      arr.push(num);
    } else {
      for (let i = lastTimeIndex; i < arr.length; i++) {
        if (arr[i] >= num) {
          arr.splice(i, 0, num);
          lastTimeIndex = i + 1;
          break;
        }
      }
    }
  });

  const arrLen = arr.length;

  return arrLen % 2 === 0 ? (arr[(arrLen / 2) - 1] + arr[arrLen / 2]) / 2 : arr[(arrLen - 1) / 2];
};

module.exports = findMedianSortedArrays;
