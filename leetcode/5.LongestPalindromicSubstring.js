/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.

Example:

Input: "cbbd"

Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sLength = s.length
  let maxLength = 0
  let start = 0

  function seek (left, right) {
    let l = left
    let r = right
    while (l >= 0 && r < sLength && s.charAt(l) === s.charAt(r)) {
      l--
      r++
    }
    return r - l - 1
  }
  for (let i = 0; i < sLength; i++) {
    let length1 = seek(i, i)
    let length2 = seek(i, i + 1)

    let length = Math.max(length1, length2)
    if (maxLength < length) {
      maxLength = length
      start = i
    }
  }

  return s.substr(start - ~~((maxLength - 1) / 2), maxLength)
}
module.exports = longestPalindrome
const assert = require('assert')
assert.equal(longestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
assert.equal(longestPalindrome('babad'), 'bab')
assert.equal(longestPalindrome('cbbd'), 'bb')
assert.equal(longestPalindrome('xccbbd'), 'cc')
assert.equal(longestPalindrome('ddcddd'), 'ddcdd')
assert.equal(longestPalindrome('dcccbbd'), 'ccc')
assert.equal(longestPalindrome('a'), 'a')

/**
 * time out
 * @param {string} s
 * @return {string}
 */
var longestPalindromeOld = function (s) {
  const dic = new Map()
  const sLength = s.length
  let maxLength = 0
  let maxStr = ''

  function seek (start) {
    if (start >= sLength) return
    let c = s.charAt(start)
    let cArr
    if (dic.has(c)) {
      cArr = dic.get(c)
    } else {
      cArr = []
      for (let i = start; i < sLength; i++) {
        if (c === s.charAt(i)) {
          cArr.push(i)
        }
      }
      dic.set(c, cArr)
    }
    let cLength = cArr.length
    for (let i = cLength - 1; i >= 0; i--) {
      let cStart = start
      let end = cArr[i]
      let cEnd = end
      if (cEnd - start < maxLength) {
        return
      }
      while (cStart < cEnd) {
        if (s.charAt(cStart) === s.charAt(cEnd)) {
          cStart++
          cEnd--
        } else {
          break
        }
      }
      if (cStart >= cEnd) {
        let len = end - start + 1
        if (maxLength < len) {
          maxLength = len
          maxStr = s.substr(start, maxLength)
          break
        }
      }
    }
  }
  for (let i = 0; i < sLength; i++) {
    seek(i)
  }
  return maxStr
}
