const lengthOfLongestSubstring = require('./3.LongestSubstringWithoutRepeatingCharacters')
const expect = require('chai').expect

describe('3.LongestSubstringWithoutRepeatingCharacters', function () {
  it('should return true', function () {
    expect(lengthOfLongestSubstring('dvdf')).to.be.equal(3)
  })
  it('should return true', function () {
    expect(lengthOfLongestSubstring('abcabcbb')).to.be.equal(3)
  })
  it('should return true', function () {
    expect(lengthOfLongestSubstring('bbbbb')).to.be.equal(1)
  })
  it('should return true', function () {
    expect(lengthOfLongestSubstring('pwwkew')).to.be.equal(3)
  })
  it('should return true', function () {
    expect(lengthOfLongestSubstring('c')).to.be.equal(1)
  })
  it('should return true', function () {
    expect(lengthOfLongestSubstring('')).to.be.equal(0)
  })
})
