/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let index1 = 0
  let index2 = 0
  const length1 = nums1.length
  const length2 = nums2.length
  const isOdd = (length1 + length2) % 2 === 0
  const midIndex1 = ~~((length1 + length2) / 2) + (isOdd ? -1 : 0)
  const midIndex2 = isOdd ? midIndex1 + 1 : midIndex1
  let midNum1
  let midNum2
  let curIndex = 0

  do {
    let num1 = nums1[index1]
    let num2 = nums2[index2]
    let min
    if (isNaN(num1)) {
      index2++
      min = num2
    } else if (isNaN(num2)) {
      index1++
      min = num1
    } else if (num1 < num2) {
      index1++
      min = num1
    } else {
      index2++
      min = num2
    }
    if (curIndex === midIndex1) {
      midNum1 = min
    }
    if (curIndex === midIndex2) {
      midNum2 = min
      break
    }
    curIndex++
  }
  while (index1 < length1 || index2 < length2)
  return (midNum1 + midNum2) / 2
}
module.exports = findMedianSortedArrays
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 3], [2, 4]))
console.log(findMedianSortedArrays([2], [2]))
console.log(findMedianSortedArrays([1], []))
