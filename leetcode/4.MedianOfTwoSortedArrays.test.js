const findMedianSortedArrays = require('./4.MedianOfTwoSortedArrays')
const expect = require('chai').expect

describe('4.MedianOfTwoSortedArrays', function () {
  it('should return true', function () {
    expect(findMedianSortedArrays([1, 3], [2])).to.be.equal(2)
  })
  it('should return true', function () {
    expect(findMedianSortedArrays([1, 3], [2, 4])).to.be.equal(2.5)
  })
  it('should return true', function () {
    expect(findMedianSortedArrays([2], [2])).to.be.equal(2)
  })
  it('should return true', function () {
    expect(findMedianSortedArrays([1], [])).to.be.equal(1)
  })
})
